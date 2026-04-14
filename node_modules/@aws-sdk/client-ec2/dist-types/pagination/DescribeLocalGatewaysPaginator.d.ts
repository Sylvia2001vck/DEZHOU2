import type { Paginator } from "@smithy/types";
import { DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput } from "../commands/DescribeLocalGatewaysCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeLocalGateways: (config: EC2PaginationConfiguration, input: DescribeLocalGatewaysCommandInput, ...rest: any[]) => Paginator<DescribeLocalGatewaysCommandOutput>;
