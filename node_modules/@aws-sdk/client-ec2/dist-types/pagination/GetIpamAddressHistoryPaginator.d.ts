import type { Paginator } from "@smithy/types";
import { GetIpamAddressHistoryCommandInput, GetIpamAddressHistoryCommandOutput } from "../commands/GetIpamAddressHistoryCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetIpamAddressHistory: (config: EC2PaginationConfiguration, input: GetIpamAddressHistoryCommandInput, ...rest: any[]) => Paginator<GetIpamAddressHistoryCommandOutput>;
