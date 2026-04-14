import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import { CreateDaemonRequest, CreateDaemonResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateDaemonCommandInput extends CreateDaemonRequest {}
export interface CreateDaemonCommandOutput
  extends CreateDaemonResponse,
    __MetadataBearer {}
declare const CreateDaemonCommand_base: {
  new (
    input: CreateDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDaemonCommandInput,
    CreateDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateDaemonCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDaemonCommandInput,
    CreateDaemonCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateDaemonCommand extends CreateDaemonCommand_base {
  protected static __types: {
    api: {
      input: CreateDaemonRequest;
      output: CreateDaemonResponse;
    };
    sdk: {
      input: CreateDaemonCommandInput;
      output: CreateDaemonCommandOutput;
    };
  };
}
