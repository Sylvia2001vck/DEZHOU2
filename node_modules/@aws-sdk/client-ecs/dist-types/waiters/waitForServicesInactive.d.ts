import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeServicesCommandInput } from "../commands/DescribeServicesCommand";
import type { ECSClient } from "../ECSClient";
/**
 *
 *  @deprecated Use waitUntilServicesInactive instead. waitForServicesInactive does not throw error in non-success cases.
 */
export declare const waitForServicesInactive: (params: WaiterConfiguration<ECSClient>, input: DescribeServicesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeServicesCommand for polling.
 */
export declare const waitUntilServicesInactive: (params: WaiterConfiguration<ECSClient>, input: DescribeServicesCommandInput) => Promise<WaiterResult>;
