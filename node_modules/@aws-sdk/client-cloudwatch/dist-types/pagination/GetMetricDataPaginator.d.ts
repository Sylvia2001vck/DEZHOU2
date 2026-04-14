import type { Paginator } from "@smithy/types";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetMetricData: (config: CloudWatchPaginationConfiguration, input: GetMetricDataCommandInput, ...rest: any[]) => Paginator<GetMetricDataCommandOutput>;
