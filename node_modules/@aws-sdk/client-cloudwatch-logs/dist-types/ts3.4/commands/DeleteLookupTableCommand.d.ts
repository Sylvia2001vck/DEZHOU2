import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { DeleteLookupTableRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteLookupTableCommandInput
  extends DeleteLookupTableRequest {}
export interface DeleteLookupTableCommandOutput extends __MetadataBearer {}
declare const DeleteLookupTableCommand_base: {
  new (
    input: DeleteLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLookupTableCommandInput,
    DeleteLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLookupTableCommandInput,
    DeleteLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLookupTableCommand extends DeleteLookupTableCommand_base {
  protected static __types: {
    api: {
      input: DeleteLookupTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteLookupTableCommandInput;
      output: DeleteLookupTableCommandOutput;
    };
  };
}
