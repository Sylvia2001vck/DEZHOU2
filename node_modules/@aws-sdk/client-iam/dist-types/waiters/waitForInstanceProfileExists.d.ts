import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type GetInstanceProfileCommandInput } from "../commands/GetInstanceProfileCommand";
import type { IAMClient } from "../IAMClient";
/**
 *
 *  @deprecated Use waitUntilInstanceProfileExists instead. waitForInstanceProfileExists does not throw error in non-success cases.
 */
export declare const waitForInstanceProfileExists: (params: WaiterConfiguration<IAMClient>, input: GetInstanceProfileCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInstanceProfileCommand for polling.
 */
export declare const waitUntilInstanceProfileExists: (params: WaiterConfiguration<IAMClient>, input: GetInstanceProfileCommandInput) => Promise<WaiterResult>;
