import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  ListDaemonDeploymentsRequest,
  ListDaemonDeploymentsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListDaemonDeploymentsCommandInput
  extends ListDaemonDeploymentsRequest {}
export interface ListDaemonDeploymentsCommandOutput
  extends ListDaemonDeploymentsResponse,
    __MetadataBearer {}
declare const ListDaemonDeploymentsCommand_base: {
  new (
    input: ListDaemonDeploymentsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonDeploymentsCommandInput,
    ListDaemonDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListDaemonDeploymentsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonDeploymentsCommandInput,
    ListDaemonDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDaemonDeploymentsCommand extends ListDaemonDeploymentsCommand_base {
  protected static __types: {
    api: {
      input: ListDaemonDeploymentsRequest;
      output: ListDaemonDeploymentsResponse;
    };
    sdk: {
      input: ListDaemonDeploymentsCommandInput;
      output: ListDaemonDeploymentsCommandOutput;
    };
  };
}
