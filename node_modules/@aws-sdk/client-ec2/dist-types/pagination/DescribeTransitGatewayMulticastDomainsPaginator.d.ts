import type { Paginator } from "@smithy/types";
import { DescribeTransitGatewayMulticastDomainsCommandInput, DescribeTransitGatewayMulticastDomainsCommandOutput } from "../commands/DescribeTransitGatewayMulticastDomainsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeTransitGatewayMulticastDomains: (config: EC2PaginationConfiguration, input: DescribeTransitGatewayMulticastDomainsCommandInput, ...rest: any[]) => Paginator<DescribeTransitGatewayMulticastDomainsCommandOutput>;
