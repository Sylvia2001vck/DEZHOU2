import type { Paginator } from "@smithy/types";
import { DescribeSpotPriceHistoryCommandInput, DescribeSpotPriceHistoryCommandOutput } from "../commands/DescribeSpotPriceHistoryCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSpotPriceHistory: (config: EC2PaginationConfiguration, input: DescribeSpotPriceHistoryCommandInput, ...rest: any[]) => Paginator<DescribeSpotPriceHistoryCommandOutput>;
