import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeDaemonCommandInput } from "../commands/DescribeDaemonCommand";
import { ECSClient } from "../ECSClient";
export declare const waitForDaemonActive: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilDaemonActive: (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonCommandInput
) => Promise<WaiterResult>;
