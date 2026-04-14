import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  ListDaemonTaskDefinitionsRequest,
  ListDaemonTaskDefinitionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListDaemonTaskDefinitionsCommandInput
  extends ListDaemonTaskDefinitionsRequest {}
export interface ListDaemonTaskDefinitionsCommandOutput
  extends ListDaemonTaskDefinitionsResponse,
    __MetadataBearer {}
declare const ListDaemonTaskDefinitionsCommand_base: {
  new (
    input: ListDaemonTaskDefinitionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonTaskDefinitionsCommandInput,
    ListDaemonTaskDefinitionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListDaemonTaskDefinitionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonTaskDefinitionsCommandInput,
    ListDaemonTaskDefinitionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDaemonTaskDefinitionsCommand extends ListDaemonTaskDefinitionsCommand_base {
  protected static __types: {
    api: {
      input: ListDaemonTaskDefinitionsRequest;
      output: ListDaemonTaskDefinitionsResponse;
    };
    sdk: {
      input: ListDaemonTaskDefinitionsCommandInput;
      output: ListDaemonTaskDefinitionsCommandOutput;
    };
  };
}
