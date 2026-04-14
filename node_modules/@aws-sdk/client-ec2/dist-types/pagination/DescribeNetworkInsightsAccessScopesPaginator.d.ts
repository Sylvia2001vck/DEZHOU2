import type { Paginator } from "@smithy/types";
import { DescribeNetworkInsightsAccessScopesCommandInput, DescribeNetworkInsightsAccessScopesCommandOutput } from "../commands/DescribeNetworkInsightsAccessScopesCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeNetworkInsightsAccessScopes: (config: EC2PaginationConfiguration, input: DescribeNetworkInsightsAccessScopesCommandInput, ...rest: any[]) => Paginator<DescribeNetworkInsightsAccessScopesCommandOutput>;
