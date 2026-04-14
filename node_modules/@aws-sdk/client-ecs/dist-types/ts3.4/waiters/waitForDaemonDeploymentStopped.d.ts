import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeDaemonDeploymentsCommandInput } from "../commands/DescribeDaemonDeploymentsCommand";
import { ECSClient } from "../ECSClient";
export declare const waitForDaemonDeploymentStopped: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilDaemonDeploymentStopped: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
) => Promise<WaiterResult>;
