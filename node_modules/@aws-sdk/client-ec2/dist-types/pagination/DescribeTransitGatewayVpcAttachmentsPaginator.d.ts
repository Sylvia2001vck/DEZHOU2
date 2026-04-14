import type { Paginator } from "@smithy/types";
import { DescribeTransitGatewayVpcAttachmentsCommandInput, DescribeTransitGatewayVpcAttachmentsCommandOutput } from "../commands/DescribeTransitGatewayVpcAttachmentsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeTransitGatewayVpcAttachments: (config: EC2PaginationConfiguration, input: DescribeTransitGatewayVpcAttachmentsCommandInput, ...rest: any[]) => Paginator<DescribeTransitGatewayVpcAttachmentsCommandOutput>;
