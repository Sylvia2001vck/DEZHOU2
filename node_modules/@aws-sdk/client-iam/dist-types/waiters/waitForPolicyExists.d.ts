import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type GetPolicyCommandInput } from "../commands/GetPolicyCommand";
import type { IAMClient } from "../IAMClient";
/**
 *
 *  @deprecated Use waitUntilPolicyExists instead. waitForPolicyExists does not throw error in non-success cases.
 */
export declare const waitForPolicyExists: (params: WaiterConfiguration<IAMClient>, input: GetPolicyCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export declare const waitUntilPolicyExists: (params: WaiterConfiguration<IAMClient>, input: GetPolicyCommandInput) => Promise<WaiterResult>;
