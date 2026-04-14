import type { Paginator } from "@smithy/types";
import { SearchTransitGatewayMulticastGroupsCommandInput, SearchTransitGatewayMulticastGroupsCommandOutput } from "../commands/SearchTransitGatewayMulticastGroupsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateSearchTransitGatewayMulticastGroups: (config: EC2PaginationConfiguration, input: SearchTransitGatewayMulticastGroupsCommandInput, ...rest: any[]) => Paginator<SearchTransitGatewayMulticastGroupsCommandOutput>;
