import type { Paginator } from "@smithy/types";
import { DescribeRouteTablesCommandInput, DescribeRouteTablesCommandOutput } from "../commands/DescribeRouteTablesCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeRouteTables: (config: EC2PaginationConfiguration, input: DescribeRouteTablesCommandInput, ...rest: any[]) => Paginator<DescribeRouteTablesCommandOutput>;
