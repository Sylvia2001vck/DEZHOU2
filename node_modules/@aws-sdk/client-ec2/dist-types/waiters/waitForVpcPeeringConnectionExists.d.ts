import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeVpcPeeringConnectionsCommandInput } from "../commands/DescribeVpcPeeringConnectionsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilVpcPeeringConnectionExists instead. waitForVpcPeeringConnectionExists does not throw error in non-success cases.
 */
export declare const waitForVpcPeeringConnectionExists: (params: WaiterConfiguration<EC2Client>, input: DescribeVpcPeeringConnectionsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpcPeeringConnectionsCommand for polling.
 */
export declare const waitUntilVpcPeeringConnectionExists: (params: WaiterConfiguration<EC2Client>, input: DescribeVpcPeeringConnectionsCommandInput) => Promise<WaiterResult>;
