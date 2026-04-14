import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeDaemonDeploymentsCommandInput } from "../commands/DescribeDaemonDeploymentsCommand";
import { ECSClient } from "../ECSClient";
export declare const waitForDaemonDeploymentSuccessful: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilDaemonDeploymentSuccessful: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
) => Promise<WaiterResult>;
