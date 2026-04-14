import type { Paginator } from "@smithy/types";
import { DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput } from "../commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeLocalGatewayVirtualInterfaceGroups: (config: EC2PaginationConfiguration, input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, ...rest: any[]) => Paginator<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
