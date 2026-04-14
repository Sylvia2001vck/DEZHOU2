import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type GetPasswordDataCommandInput } from "../commands/GetPasswordDataCommand";
import type { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilPasswordDataAvailable instead. waitForPasswordDataAvailable does not throw error in non-success cases.
 */
export declare const waitForPasswordDataAvailable: (params: WaiterConfiguration<EC2Client>, input: GetPasswordDataCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPasswordDataCommand for polling.
 */
export declare const waitUntilPasswordDataAvailable: (params: WaiterConfiguration<EC2Client>, input: GetPasswordDataCommandInput) => Promise<WaiterResult>;
