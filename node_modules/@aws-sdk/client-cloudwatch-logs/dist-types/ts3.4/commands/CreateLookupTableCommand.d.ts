import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  CreateLookupTableRequest,
  CreateLookupTableResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateLookupTableCommandInput
  extends CreateLookupTableRequest {}
export interface CreateLookupTableCommandOutput
  extends CreateLookupTableResponse,
    __MetadataBearer {}
declare const CreateLookupTableCommand_base: {
  new (
    input: CreateLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLookupTableCommandInput,
    CreateLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLookupTableCommandInput,
    CreateLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateLookupTableCommand extends CreateLookupTableCommand_base {
  protected static __types: {
    api: {
      input: CreateLookupTableRequest;
      output: CreateLookupTableResponse;
    };
    sdk: {
      input: CreateLookupTableCommandInput;
      output: CreateLookupTableCommandOutput;
    };
  };
}
