import type { Paginator } from "@smithy/types";
import { DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput } from "../commands/DescribeLaunchTemplateVersionsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeLaunchTemplateVersions: (config: EC2PaginationConfiguration, input: DescribeLaunchTemplateVersionsCommandInput, ...rest: any[]) => Paginator<DescribeLaunchTemplateVersionsCommandOutput>;
