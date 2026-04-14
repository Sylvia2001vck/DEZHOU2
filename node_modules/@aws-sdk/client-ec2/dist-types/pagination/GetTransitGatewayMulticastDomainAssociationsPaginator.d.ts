import type { Paginator } from "@smithy/types";
import { GetTransitGatewayMulticastDomainAssociationsCommandInput, GetTransitGatewayMulticastDomainAssociationsCommandOutput } from "../commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetTransitGatewayMulticastDomainAssociations: (config: EC2PaginationConfiguration, input: GetTransitGatewayMulticastDomainAssociationsCommandInput, ...rest: any[]) => Paginator<GetTransitGatewayMulticastDomainAssociationsCommandOutput>;
