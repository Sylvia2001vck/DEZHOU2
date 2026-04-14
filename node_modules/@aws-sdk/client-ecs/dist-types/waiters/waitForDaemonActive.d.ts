import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeDaemonCommandInput } from "../commands/DescribeDaemonCommand";
import type { ECSClient } from "../ECSClient";
/**
 *
 *  @deprecated Use waitUntilDaemonActive instead. waitForDaemonActive does not throw error in non-success cases.
 */
export declare const waitForDaemonActive: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonCommand for polling.
 */
export declare const waitUntilDaemonActive: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonCommandInput) => Promise<WaiterResult>;
