import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DescribeDaemonTaskDefinitionRequest,
  DescribeDaemonTaskDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeDaemonTaskDefinitionCommandInput
  extends DescribeDaemonTaskDefinitionRequest {}
export interface DescribeDaemonTaskDefinitionCommandOutput
  extends DescribeDaemonTaskDefinitionResponse,
    __MetadataBearer {}
declare const DescribeDaemonTaskDefinitionCommand_base: {
  new (
    input: DescribeDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonTaskDefinitionCommandInput,
    DescribeDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonTaskDefinitionCommandInput,
    DescribeDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeDaemonTaskDefinitionCommand extends DescribeDaemonTaskDefinitionCommand_base {
  protected static __types: {
    api: {
      input: DescribeDaemonTaskDefinitionRequest;
      output: DescribeDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: DescribeDaemonTaskDefinitionCommandInput;
      output: DescribeDaemonTaskDefinitionCommandOutput;
    };
  };
}
