import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import type { CloudWatchClient } from "../CloudWatchClient";
import { type DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand";
/**
 *
 *  @deprecated Use waitUntilCompositeAlarmExists instead. waitForCompositeAlarmExists does not throw error in non-success cases.
 */
export declare const waitForCompositeAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export declare const waitUntilCompositeAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
