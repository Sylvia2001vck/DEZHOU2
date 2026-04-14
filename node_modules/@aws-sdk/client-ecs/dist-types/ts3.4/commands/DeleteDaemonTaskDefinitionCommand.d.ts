import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DeleteDaemonTaskDefinitionRequest,
  DeleteDaemonTaskDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteDaemonTaskDefinitionCommandInput
  extends DeleteDaemonTaskDefinitionRequest {}
export interface DeleteDaemonTaskDefinitionCommandOutput
  extends DeleteDaemonTaskDefinitionResponse,
    __MetadataBearer {}
declare const DeleteDaemonTaskDefinitionCommand_base: {
  new (
    input: DeleteDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDaemonTaskDefinitionCommandInput,
    DeleteDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteDaemonTaskDefinitionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDaemonTaskDefinitionCommandInput,
    DeleteDaemonTaskDefinitionCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteDaemonTaskDefinitionCommand extends DeleteDaemonTaskDefinitionCommand_base {
  protected static __types: {
    api: {
      input: DeleteDaemonTaskDefinitionRequest;
      output: DeleteDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: DeleteDaemonTaskDefinitionCommandInput;
      output: DeleteDaemonTaskDefinitionCommandOutput;
    };
  };
}
