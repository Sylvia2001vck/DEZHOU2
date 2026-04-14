import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import type { CloudWatchClient } from "../CloudWatchClient";
import { type GetAlarmMuteRuleCommandInput } from "../commands/GetAlarmMuteRuleCommand";
/**
 *
 *  @deprecated Use waitUntilAlarmMuteRuleExists instead. waitForAlarmMuteRuleExists does not throw error in non-success cases.
 */
export declare const waitForAlarmMuteRuleExists: (params: WaiterConfiguration<CloudWatchClient>, input: GetAlarmMuteRuleCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAlarmMuteRuleCommand for polling.
 */
export declare const waitUntilAlarmMuteRuleExists: (params: WaiterConfiguration<CloudWatchClient>, input: GetAlarmMuteRuleCommandInput) => Promise<WaiterResult>;
