import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeStoreImageTasksCommandInput } from "../commands/DescribeStoreImageTasksCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilStoreImageTaskComplete instead. waitForStoreImageTaskComplete does not throw error in non-success cases.
 */
export declare const waitForStoreImageTaskComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeStoreImageTasksCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStoreImageTasksCommand for polling.
 */
export declare const waitUntilStoreImageTaskComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeStoreImageTasksCommandInput) => Promise<WaiterResult>;
