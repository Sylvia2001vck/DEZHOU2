import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import {
  DescribeDaemonDeploymentsRequest,
  DescribeDaemonDeploymentsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DescribeDaemonDeploymentsCommandInput
  extends DescribeDaemonDeploymentsRequest {}
export interface DescribeDaemonDeploymentsCommandOutput
  extends DescribeDaemonDeploymentsResponse,
    __MetadataBearer {}
declare const DescribeDaemonDeploymentsCommand_base: {
  new (
    input: DescribeDaemonDeploymentsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonDeploymentsCommandInput,
    DescribeDaemonDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeDaemonDeploymentsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeDaemonDeploymentsCommandInput,
    DescribeDaemonDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeDaemonDeploymentsCommand extends DescribeDaemonDeploymentsCommand_base {
  protected static __types: {
    api: {
      input: DescribeDaemonDeploymentsRequest;
      output: DescribeDaemonDeploymentsResponse;
    };
    sdk: {
      input: DescribeDaemonDeploymentsCommandInput;
      output: DescribeDaemonDeploymentsCommandOutput;
    };
  };
}
