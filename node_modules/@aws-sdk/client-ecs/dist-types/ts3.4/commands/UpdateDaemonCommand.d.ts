import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import { UpdateDaemonRequest, UpdateDaemonResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateDaemonCommandInput extends UpdateDaemonRequest {}
export interface UpdateDaemonCommandOutput
  extends UpdateDaemonResponse,
    __MetadataBearer {}
declare const UpdateDaemonCommand_base: {
  new (
    input: UpdateDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDaemonCommandInput,
    UpdateDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDaemonCommandInput,
    UpdateDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateDaemonCommand extends UpdateDaemonCommand_base {
  protected static __types: {
    api: {
      input: UpdateDaemonRequest;
      output: UpdateDaemonResponse;
    };
    sdk: {
      input: UpdateDaemonCommandInput;
      output: UpdateDaemonCommandOutput;
    };
  };
}
