import type { Paginator } from "@smithy/types";
import { DescribeInstanceConnectEndpointsCommandInput, DescribeInstanceConnectEndpointsCommandOutput } from "../commands/DescribeInstanceConnectEndpointsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceConnectEndpoints: (config: EC2PaginationConfiguration, input: DescribeInstanceConnectEndpointsCommandInput, ...rest: any[]) => Paginator<DescribeInstanceConnectEndpointsCommandOutput>;
