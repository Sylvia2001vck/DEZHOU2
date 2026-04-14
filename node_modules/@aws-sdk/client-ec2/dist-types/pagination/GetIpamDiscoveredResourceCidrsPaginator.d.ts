import type { Paginator } from "@smithy/types";
import { GetIpamDiscoveredResourceCidrsCommandInput, GetIpamDiscoveredResourceCidrsCommandOutput } from "../commands/GetIpamDiscoveredResourceCidrsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetIpamDiscoveredResourceCidrs: (config: EC2PaginationConfiguration, input: GetIpamDiscoveredResourceCidrsCommandInput, ...rest: any[]) => Paginator<GetIpamDiscoveredResourceCidrsCommandOutput>;
