import type { Paginator } from "@smithy/types";
import { DescribeRouteServersCommandInput, DescribeRouteServersCommandOutput } from "../commands/DescribeRouteServersCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeRouteServers: (config: EC2PaginationConfiguration, input: DescribeRouteServersCommandInput, ...rest: any[]) => Paginator<DescribeRouteServersCommandOutput>;
