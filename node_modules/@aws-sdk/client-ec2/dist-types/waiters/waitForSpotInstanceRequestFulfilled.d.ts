import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeSpotInstanceRequestsCommandInput } from "../commands/DescribeSpotInstanceRequestsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilSpotInstanceRequestFulfilled instead. waitForSpotInstanceRequestFulfilled does not throw error in non-success cases.
 */
export declare const waitForSpotInstanceRequestFulfilled: (params: WaiterConfiguration<EC2Client>, input: DescribeSpotInstanceRequestsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSpotInstanceRequestsCommand for polling.
 */
export declare const waitUntilSpotInstanceRequestFulfilled: (params: WaiterConfiguration<EC2Client>, input: DescribeSpotInstanceRequestsCommandInput) => Promise<WaiterResult>;
