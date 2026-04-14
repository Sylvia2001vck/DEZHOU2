import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeDaemonTaskDefinitionCommandInput } from "../commands/DescribeDaemonTaskDefinitionCommand";
import { ECSClient } from "../ECSClient";
export declare const waitForDaemonTaskDefinitionDeleted: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilDaemonTaskDefinitionDeleted: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
) => Promise<WaiterResult>;
