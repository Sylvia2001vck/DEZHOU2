import type { Paginator } from "@smithy/types";
import { DescribeCapacityManagerDataExportsCommandInput, DescribeCapacityManagerDataExportsCommandOutput } from "../commands/DescribeCapacityManagerDataExportsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityManagerDataExports: (config: EC2PaginationConfiguration, input: DescribeCapacityManagerDataExportsCommandInput, ...rest: any[]) => Paginator<DescribeCapacityManagerDataExportsCommandOutput>;
