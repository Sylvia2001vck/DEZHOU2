import type { Paginator } from "@smithy/types";
import { GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput, GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput } from "../commands/GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetNetworkInsightsAccessScopeAnalysisFindings: (config: EC2PaginationConfiguration, input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput, ...rest: any[]) => Paginator<GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput>;
