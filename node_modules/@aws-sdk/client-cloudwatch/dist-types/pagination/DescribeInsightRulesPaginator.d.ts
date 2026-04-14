import type { Paginator } from "@smithy/types";
import { DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput } from "../commands/DescribeInsightRulesCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInsightRules: (config: CloudWatchPaginationConfiguration, input: DescribeInsightRulesCommandInput, ...rest: any[]) => Paginator<DescribeInsightRulesCommandOutput>;
