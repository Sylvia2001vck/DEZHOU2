import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeInternetGatewaysCommandInput } from "../commands/DescribeInternetGatewaysCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilInternetGatewayExists instead. waitForInternetGatewayExists does not throw error in non-success cases.
 */
export declare const waitForInternetGatewayExists: (params: WaiterConfiguration<EC2Client>, input: DescribeInternetGatewaysCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInternetGatewaysCommand for polling.
 */
export declare const waitUntilInternetGatewayExists: (params: WaiterConfiguration<EC2Client>, input: DescribeInternetGatewaysCommandInput) => Promise<WaiterResult>;
