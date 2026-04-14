import type { Paginator } from "@smithy/types";
import { DescribeVpcEndpointConnectionNotificationsCommandInput, DescribeVpcEndpointConnectionNotificationsCommandOutput } from "../commands/DescribeVpcEndpointConnectionNotificationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeVpcEndpointConnectionNotifications: (config: EC2PaginationConfiguration, input: DescribeVpcEndpointConnectionNotificationsCommandInput, ...rest: any[]) => Paginator<DescribeVpcEndpointConnectionNotificationsCommandOutput>;
