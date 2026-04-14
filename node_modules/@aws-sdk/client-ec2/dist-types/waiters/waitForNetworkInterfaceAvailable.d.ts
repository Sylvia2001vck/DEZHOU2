import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeNetworkInterfacesCommandInput } from "../commands/DescribeNetworkInterfacesCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilNetworkInterfaceAvailable instead. waitForNetworkInterfaceAvailable does not throw error in non-success cases.
 */
export declare const waitForNetworkInterfaceAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeNetworkInterfacesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNetworkInterfacesCommand for polling.
 */
export declare const waitUntilNetworkInterfaceAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeNetworkInterfacesCommandInput) => Promise<WaiterResult>;
