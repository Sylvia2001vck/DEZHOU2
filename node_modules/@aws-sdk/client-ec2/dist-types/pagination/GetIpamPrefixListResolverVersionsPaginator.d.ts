import type { Paginator } from "@smithy/types";
import { GetIpamPrefixListResolverVersionsCommandInput, GetIpamPrefixListResolverVersionsCommandOutput } from "../commands/GetIpamPrefixListResolverVersionsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetIpamPrefixListResolverVersions: (config: EC2PaginationConfiguration, input: GetIpamPrefixListResolverVersionsCommandInput, ...rest: any[]) => Paginator<GetIpamPrefixListResolverVersionsCommandOutput>;
