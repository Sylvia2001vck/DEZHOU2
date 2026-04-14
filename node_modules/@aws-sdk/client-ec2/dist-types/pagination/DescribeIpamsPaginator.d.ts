import type { Paginator } from "@smithy/types";
import { DescribeIpamsCommandInput, DescribeIpamsCommandOutput } from "../commands/DescribeIpamsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeIpams: (config: EC2PaginationConfiguration, input: DescribeIpamsCommandInput, ...rest: any[]) => Paginator<DescribeIpamsCommandOutput>;
