import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeDaemonTaskDefinitionCommandInput } from "../commands/DescribeDaemonTaskDefinitionCommand";
import { ECSClient } from "../ECSClient";
export declare const waitForDaemonTaskDefinitionActive: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilDaemonTaskDefinitionActive: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
) => Promise<WaiterResult>;
