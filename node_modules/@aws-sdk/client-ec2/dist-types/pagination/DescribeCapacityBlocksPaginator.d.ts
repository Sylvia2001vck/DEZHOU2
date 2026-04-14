import type { Paginator } from "@smithy/types";
import { DescribeCapacityBlocksCommandInput, DescribeCapacityBlocksCommandOutput } from "../commands/DescribeCapacityBlocksCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityBlocks: (config: EC2PaginationConfiguration, input: DescribeCapacityBlocksCommandInput, ...rest: any[]) => Paginator<DescribeCapacityBlocksCommandOutput>;
