import type { Paginator } from "@smithy/types";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "../commands/DescribeFleetsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeFleets: (config: EC2PaginationConfiguration, input: DescribeFleetsCommandInput, ...rest: any[]) => Paginator<DescribeFleetsCommandOutput>;
