import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  RegisterDaemonTaskDefinitionRequest,
  RegisterDaemonTaskDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RegisterDaemonTaskDefinitionCommandInput
  extends RegisterDaemonTaskDefinitionRequest {}
export interface RegisterDaemonTaskDefinitionCommandOutput
  extends RegisterDaemonTaskDefinitionResponse,
    __MetadataBearer {}
declare const RegisterDaemonTaskDefinitionCommand_base: {
  new (
    input: RegisterDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterDaemonTaskDefinitionCommandInput,
    RegisterDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RegisterDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterDaemonTaskDefinitionCommandInput,
    RegisterDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterDaemonTaskDefinitionCommand extends RegisterDaemonTaskDefinitionCommand_base {
  protected static __types: {
    api: {
      input: RegisterDaemonTaskDefinitionRequest;
      output: RegisterDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: RegisterDaemonTaskDefinitionCommandInput;
      output: RegisterDaemonTaskDefinitionCommandOutput;
    };
  };
}
