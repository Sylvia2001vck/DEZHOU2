import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeLookupTablesRequest,
  DescribeLookupTablesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeLookupTablesCommandInput
  extends DescribeLookupTablesRequest {}
export interface DescribeLookupTablesCommandOutput
  extends DescribeLookupTablesResponse,
    __MetadataBearer {}
declare const DescribeLookupTablesCommand_base: {
  new (
    input: DescribeLookupTablesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeLookupTablesCommandInput,
    DescribeLookupTablesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeLookupTablesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeLookupTablesCommandInput,
    DescribeLookupTablesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeLookupTablesCommand extends DescribeLookupTablesCommand_base {
  protected static __types: {
    api: {
      input: DescribeLookupTablesRequest;
      output: DescribeLookupTablesResponse;
    };
    sdk: {
      input: DescribeLookupTablesCommandInput;
      output: DescribeLookupTablesCommandOutput;
    };
  };
}
