import type { Paginator } from "@smithy/types";
import { GetTransitGatewayRouteTableAssociationsCommandInput, GetTransitGatewayRouteTableAssociationsCommandOutput } from "../commands/GetTransitGatewayRouteTableAssociationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetTransitGatewayRouteTableAssociations: (config: EC2PaginationConfiguration, input: GetTransitGatewayRouteTableAssociationsCommandInput, ...rest: any[]) => Paginator<GetTransitGatewayRouteTableAssociationsCommandOutput>;
