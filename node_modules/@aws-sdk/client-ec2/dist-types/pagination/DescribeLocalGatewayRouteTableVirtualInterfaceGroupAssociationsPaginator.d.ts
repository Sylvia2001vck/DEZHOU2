import type { Paginator } from "@smithy/types";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput } from "../commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations: (config: EC2PaginationConfiguration, input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, ...rest: any[]) => Paginator<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
