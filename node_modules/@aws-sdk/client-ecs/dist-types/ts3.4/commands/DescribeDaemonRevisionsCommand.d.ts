import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DescribeDaemonRevisionsRequest,
  DescribeDaemonRevisionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeDaemonRevisionsCommandInput
  extends DescribeDaemonRevisionsRequest {}
export interface DescribeDaemonRevisionsCommandOutput
  extends DescribeDaemonRevisionsResponse,
    __MetadataBearer {}
declare const DescribeDaemonRevisionsCommand_base: {
  new (
    input: DescribeDaemonRevisionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonRevisionsCommandInput,
    DescribeDaemonRevisionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeDaemonRevisionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonRevisionsCommandInput,
    DescribeDaemonRevisionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeDaemonRevisionsCommand extends DescribeDaemonRevisionsCommand_base {
  protected static __types: {
    api: {
      input: DescribeDaemonRevisionsRequest;
      output: DescribeDaemonRevisionsResponse;
    };
    sdk: {
      input: DescribeDaemonRevisionsCommandInput;
      output: DescribeDaemonRevisionsCommandOutput;
    };
  };
}
