import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import { DeleteDaemonRequest, DeleteDaemonResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteDaemonCommandInput extends DeleteDaemonRequest {}
export interface DeleteDaemonCommandOutput
  extends DeleteDaemonResponse,
    __MetadataBearer {}
declare const DeleteDaemonCommand_base: {
  new (
    input: DeleteDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDaemonCommandInput,
    DeleteDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteDaemonCommandInput,
    DeleteDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteDaemonCommand extends DeleteDaemonCommand_base {
  protected static __types: {
    api: {
      input: DeleteDaemonRequest;
      output: DeleteDaemonResponse;
    };
    sdk: {
      input: DeleteDaemonCommandInput;
      output: DeleteDaemonCommandOutput;
    };
  };
}
