import type { Paginator } from "@smithy/types";
import { DescribeTransitGatewayConnectPeersCommandInput, DescribeTransitGatewayConnectPeersCommandOutput } from "../commands/DescribeTransitGatewayConnectPeersCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeTransitGatewayConnectPeers: (config: EC2PaginationConfiguration, input: DescribeTransitGatewayConnectPeersCommandInput, ...rest: any[]) => Paginator<DescribeTransitGatewayConnectPeersCommandOutput>;
