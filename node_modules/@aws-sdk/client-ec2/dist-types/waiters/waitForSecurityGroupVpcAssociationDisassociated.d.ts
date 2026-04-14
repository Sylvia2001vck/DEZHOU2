import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeSecurityGroupVpcAssociationsCommandInput } from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilSecurityGroupVpcAssociationDisassociated instead. waitForSecurityGroupVpcAssociationDisassociated does not throw error in non-success cases.
 */
export declare const waitForSecurityGroupVpcAssociationDisassociated: (params: WaiterConfiguration<EC2Client>, input: DescribeSecurityGroupVpcAssociationsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecurityGroupVpcAssociationsCommand for polling.
 */
export declare const waitUntilSecurityGroupVpcAssociationDisassociated: (params: WaiterConfiguration<EC2Client>, input: DescribeSecurityGroupVpcAssociationsCommandInput) => Promise<WaiterResult>;
