import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import {
  GetOTelEnrichmentInput,
  GetOTelEnrichmentOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetOTelEnrichmentCommandInput extends GetOTelEnrichmentInput {}
export interface GetOTelEnrichmentCommandOutput
  extends GetOTelEnrichmentOutput,
    __MetadataBearer {}
declare const GetOTelEnrichmentCommand_base: {
  new (
    input: GetOTelEnrichmentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetOTelEnrichmentCommandInput,
    GetOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetOTelEnrichmentCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetOTelEnrichmentCommandInput,
    GetOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetOTelEnrichmentCommand extends GetOTelEnrichmentCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetOTelEnrichmentOutput;
    };
    sdk: {
      input: GetOTelEnrichmentCommandInput;
      output: GetOTelEnrichmentCommandOutput;
    };
  };
}
