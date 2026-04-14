import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeImagesCommandInput } from "../commands/DescribeImagesCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilImageAvailable instead. waitForImageAvailable does not throw error in non-success cases.
 */
export declare const waitForImageAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImagesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImagesCommand for polling.
 */
export declare const waitUntilImageAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImagesCommandInput) => Promise<WaiterResult>;
