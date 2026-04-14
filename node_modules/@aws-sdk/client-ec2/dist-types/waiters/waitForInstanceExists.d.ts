import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilInstanceExists instead. waitForInstanceExists does not throw error in non-success cases.
 */
export declare const waitForInstanceExists: (params: WaiterConfiguration<EC2Client>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export declare const waitUntilInstanceExists: (params: WaiterConfiguration<EC2Client>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
