import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { UpdateLookupTableRequest } from "../models/models_0";
import { UpdateLookupTableResponse } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateLookupTableCommandInput
  extends UpdateLookupTableRequest {}
export interface UpdateLookupTableCommandOutput
  extends UpdateLookupTableResponse,
    __MetadataBearer {}
declare const UpdateLookupTableCommand_base: {
  new (
    input: UpdateLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateLookupTableCommandInput,
    UpdateLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateLookupTableCommandInput,
    UpdateLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateLookupTableCommand extends UpdateLookupTableCommand_base {
  protected static __types: {
    api: {
      input: UpdateLookupTableRequest;
      output: UpdateLookupTableResponse;
    };
    sdk: {
      input: UpdateLookupTableCommandInput;
      output: UpdateLookupTableCommandOutput;
    };
  };
}
