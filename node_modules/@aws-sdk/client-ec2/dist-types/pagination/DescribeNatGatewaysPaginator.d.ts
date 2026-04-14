import type { Paginator } from "@smithy/types";
import { DescribeNatGatewaysCommandInput, DescribeNatGatewaysCommandOutput } from "../commands/DescribeNatGatewaysCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeNatGateways: (config: EC2PaginationConfiguration, input: DescribeNatGatewaysCommandInput, ...rest: any[]) => Paginator<DescribeNatGatewaysCommandOutput>;
