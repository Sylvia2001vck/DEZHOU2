import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeVolumesCommandInput } from "../commands/DescribeVolumesCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilVolumeDeleted instead. waitForVolumeDeleted does not throw error in non-success cases.
 */
export declare const waitForVolumeDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeVolumesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVolumesCommand for polling.
 */
export declare const waitUntilVolumeDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeVolumesCommandInput) => Promise<WaiterResult>;
