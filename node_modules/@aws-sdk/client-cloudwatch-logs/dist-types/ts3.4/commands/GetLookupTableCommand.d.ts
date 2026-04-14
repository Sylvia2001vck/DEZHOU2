import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  GetLookupTableRequest,
  GetLookupTableResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetLookupTableCommandInput extends GetLookupTableRequest {}
export interface GetLookupTableCommandOutput
  extends GetLookupTableResponse,
    __MetadataBearer {}
declare const GetLookupTableCommand_base: {
  new (
    input: GetLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLookupTableCommandInput,
    GetLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetLookupTableCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLookupTableCommandInput,
    GetLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetLookupTableCommand extends GetLookupTableCommand_base {
  protected static __types: {
    api: {
      input: GetLookupTableRequest;
      output: GetLookupTableResponse;
    };
    sdk: {
      input: GetLookupTableCommandInput;
      output: GetLookupTableCommandOutput;
    };
  };
}
