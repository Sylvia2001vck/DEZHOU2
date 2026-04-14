import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECSClient";
import { ListDaemonsRequest, ListDaemonsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListDaemonsCommandInput extends ListDaemonsRequest {}
export interface ListDaemonsCommandOutput
  extends ListDaemonsResponse,
    __MetadataBearer {}
declare const ListDaemonsCommand_base: {
  new (
    input: ListDaemonsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonsCommandInput,
    ListDaemonsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListDaemonsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListDaemonsCommandInput,
    ListDaemonsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDaemonsCommand extends ListDaemonsCommand_base {
  protected static __types: {
    api: {
      input: ListDaemonsRequest;
      output: ListDaemonsResponse;
    };
    sdk: {
      input: ListDaemonsCommandInput;
      output: ListDaemonsCommandOutput;
    };
  };
}
