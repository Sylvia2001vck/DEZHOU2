import type { Paginator } from "@smithy/types";
import { DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput } from "../commands/DescribeIpv6PoolsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeIpv6Pools: (config: EC2PaginationConfiguration, input: DescribeIpv6PoolsCommandInput, ...rest: any[]) => Paginator<DescribeIpv6PoolsCommandOutput>;
