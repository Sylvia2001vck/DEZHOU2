import type { Paginator } from "@smithy/types";
import { DescribePrincipalIdFormatCommandInput, DescribePrincipalIdFormatCommandOutput } from "../commands/DescribePrincipalIdFormatCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribePrincipalIdFormat: (config: EC2PaginationConfiguration, input: DescribePrincipalIdFormatCommandInput, ...rest: any[]) => Paginator<DescribePrincipalIdFormatCommandOutput>;
