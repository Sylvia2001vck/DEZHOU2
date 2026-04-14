import type { Paginator } from "@smithy/types";
import { GetIpamPrefixListResolverRulesCommandInput, GetIpamPrefixListResolverRulesCommandOutput } from "../commands/GetIpamPrefixListResolverRulesCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetIpamPrefixListResolverRules: (config: EC2PaginationConfiguration, input: GetIpamPrefixListResolverRulesCommandInput, ...rest: any[]) => Paginator<GetIpamPrefixListResolverRulesCommandOutput>;
