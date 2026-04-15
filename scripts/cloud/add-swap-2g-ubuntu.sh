#!/usr/bin/env bash
# Optional: add 2G swap on small Tencent/aliyun VMs so cc1plus compiling huge .pb.cc
# does not trigger OOM killer. Run once; needs sudo.
set -euo pipefail

if swapon --show 2>/dev/null | grep -q '/swapfile'; then
  echo "swapfile is already active:"
  swapon --show
  free -h
  exit 0
fi

if [[ ! -f /swapfile ]]; then
  echo "Creating 2G /swapfile..."
  sudo fallocate -l 2G /swapfile 2>/dev/null || sudo dd if=/dev/zero of=/swapfile bs=1M count=2048 status=progress
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
else
  echo "Using existing /swapfile..."
  sudo mkswap /swapfile
fi

sudo swapon /swapfile
echo "Done. Current memory + swap:"
free -h
echo "To persist after reboot, add once to /etc/fstab:"
echo "/swapfile none swap sw 0 0"
