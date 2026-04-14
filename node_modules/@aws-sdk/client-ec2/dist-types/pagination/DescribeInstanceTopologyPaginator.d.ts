import type { Paginator } from "@smithy/types";
import { DescribeInstanceTopologyCommandInput, DescribeInstanceTopologyCommandOutput } from "../commands/DescribeInstanceTopologyCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceTopology: (config: EC2PaginationConfiguration, input: DescribeInstanceTopologyCommandInput, ...rest: any[]) => Paginator<DescribeInstanceTopologyCommandOutput>;
