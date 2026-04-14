import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import {
  StopOTelEnrichmentInput,
  StopOTelEnrichmentOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface StopOTelEnrichmentCommandInput
  extends StopOTelEnrichmentInput {}
export interface StopOTelEnrichmentCommandOutput
  extends StopOTelEnrichmentOutput,
    __MetadataBearer {}
declare const StopOTelEnrichmentCommand_base: {
  new (
    input: StopOTelEnrichmentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StopOTelEnrichmentCommandInput,
    StopOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [StopOTelEnrichmentCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    StopOTelEnrichmentCommandInput,
    StopOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StopOTelEnrichmentCommand extends StopOTelEnrichmentCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopOTelEnrichmentCommandInput;
      output: StopOTelEnrichmentCommandOutput;
    };
  };
}
