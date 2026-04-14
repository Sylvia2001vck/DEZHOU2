import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeDaemonTaskDefinitionCommandInput } from "../commands/DescribeDaemonTaskDefinitionCommand";
import type { ECSClient } from "../ECSClient";
/**
 *
 *  @deprecated Use waitUntilDaemonTaskDefinitionActive instead. waitForDaemonTaskDefinitionActive does not throw error in non-success cases.
 */
export declare const waitForDaemonTaskDefinitionActive: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonTaskDefinitionCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonTaskDefinitionCommand for polling.
 */
export declare const waitUntilDaemonTaskDefinitionActive: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonTaskDefinitionCommandInput) => Promise<WaiterResult>;
