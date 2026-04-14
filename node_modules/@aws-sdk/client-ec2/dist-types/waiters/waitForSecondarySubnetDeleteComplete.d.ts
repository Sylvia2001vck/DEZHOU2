import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeSecondarySubnetsCommandInput } from "../commands/DescribeSecondarySubnetsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilSecondarySubnetDeleteComplete instead. waitForSecondarySubnetDeleteComplete does not throw error in non-success cases.
 */
export declare const waitForSecondarySubnetDeleteComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeSecondarySubnetsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecondarySubnetsCommand for polling.
 */
export declare const waitUntilSecondarySubnetDeleteComplete: (params: WaiterConfiguration<EC2Client>, input: DescribeSecondarySubnetsCommandInput) => Promise<WaiterResult>;
