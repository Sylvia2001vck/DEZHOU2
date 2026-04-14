import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeSecondarySubnetsCommandInput } from "../commands/DescribeSecondarySubnetsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilSecondarySubnetCreateComplete instead. waitForSecondarySubnetCreateComplete does not throw error in non-success cases.
 */
export declare const waitForSecondarySubnetCreateComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeSecondarySubnetsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecondarySubnetsCommand for polling.
 */
export declare const waitUntilSecondarySubnetCreateComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeSecondarySubnetsCommandInput) => Promise<WaiterResult>;
