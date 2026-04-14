import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeSubnetsCommandInput } from "../commands/DescribeSubnetsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilSubnetAvailable instead. waitForSubnetAvailable does not throw error in non-success cases.
 */
export declare const waitForSubnetAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeSubnetsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSubnetsCommand for polling.
 */
export declare const waitUntilSubnetAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeSubnetsCommandInput) => Promise<WaiterResult>;
