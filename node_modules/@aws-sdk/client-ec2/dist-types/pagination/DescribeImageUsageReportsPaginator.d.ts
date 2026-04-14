import type { Paginator } from "@smithy/types";
import { DescribeImageUsageReportsCommandInput, DescribeImageUsageReportsCommandOutput } from "../commands/DescribeImageUsageReportsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeImageUsageReports: (config: EC2PaginationConfiguration, input: DescribeImageUsageReportsCommandInput, ...rest: any[]) => Paginator<DescribeImageUsageReportsCommandOutput>;
