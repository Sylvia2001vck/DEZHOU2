import type { Paginator } from "@smithy/types";
import { DescribeRouteServerEndpointsCommandInput, DescribeRouteServerEndpointsCommandOutput } from "../commands/DescribeRouteServerEndpointsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeRouteServerEndpoints: (config: EC2PaginationConfiguration, input: DescribeRouteServerEndpointsCommandInput, ...rest: any[]) => Paginator<DescribeRouteServerEndpointsCommandOutput>;
