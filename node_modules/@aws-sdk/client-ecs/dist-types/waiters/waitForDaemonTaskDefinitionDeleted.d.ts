import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeDaemonTaskDefinitionCommandInput } from "../commands/DescribeDaemonTaskDefinitionCommand";
import type { ECSClient } from "../ECSClient";
/**
 *
 *  @deprecated Use waitUntilDaemonTaskDefinitionDeleted instead. waitForDaemonTaskDefinitionDeleted does not throw error in non-success cases.
 */
export declare const waitForDaemonTaskDefinitionDeleted: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonTaskDefinitionCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonTaskDefinitionCommand for polling.
 */
export declare const waitUntilDaemonTaskDefinitionDeleted: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonTaskDefinitionCommandInput) => Promise<WaiterResult>;
