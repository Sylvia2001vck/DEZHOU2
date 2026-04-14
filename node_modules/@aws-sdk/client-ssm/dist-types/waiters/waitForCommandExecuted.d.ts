import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type GetCommandInvocationCommandInput } from "../commands/GetCommandInvocationCommand";
import type { SSMClient } from "../SSMClient";
/**
 *
 *  @deprecated Use waitUntilCommandExecuted instead. waitForCommandExecuted does not throw error in non-success cases.
 */
export declare const waitForCommandExecuted: (params: WaiterConfiguration<SSMClient>, input: GetCommandInvocationCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCommandInvocationCommand for polling.
 */
export declare const waitUntilCommandExecuted: (params: WaiterConfiguration<SSMClient>, input: GetCommandInvocationCommandInput) => Promise<WaiterResult>;
