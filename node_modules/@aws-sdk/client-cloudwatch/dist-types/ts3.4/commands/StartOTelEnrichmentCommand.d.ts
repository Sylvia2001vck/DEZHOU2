import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import {
  StartOTelEnrichmentInput,
  StartOTelEnrichmentOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface StartOTelEnrichmentCommandInput
  extends StartOTelEnrichmentInput {}
export interface StartOTelEnrichmentCommandOutput
  extends StartOTelEnrichmentOutput,
    __MetadataBearer {}
declare const StartOTelEnrichmentCommand_base: {
  new (
    input: StartOTelEnrichmentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartOTelEnrichmentCommandInput,
    StartOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [StartOTelEnrichmentCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    StartOTelEnrichmentCommandInput,
    StartOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StartOTelEnrichmentCommand extends StartOTelEnrichmentCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StartOTelEnrichmentCommandInput;
      output: StartOTelEnrichmentCommandOutput;
    };
  };
}
