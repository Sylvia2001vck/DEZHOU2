import { type WaiterConfiguration, type WaiterResult } from "@smithy/util-waiter";
import { type DescribeDaemonDeploymentsCommandInput } from "../commands/DescribeDaemonDeploymentsCommand";
import type { ECSClient } from "../ECSClient";
/**
 *
 *  @deprecated Use waitUntilDaemonDeploymentStopped instead. waitForDaemonDeploymentStopped does not throw error in non-success cases.
 */
export declare const waitForDaemonDeploymentStopped: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonDeploymentsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonDeploymentsCommand for polling.
 */
export declare const waitUntilDaemonDeploymentStopped: (params: WaiterConfiguration<ECSClient>, input: DescribeDaemonDeploymentsCommandInput) => Promise<WaiterResult>;
