import type { Paginator } from "@smithy/types";
import { DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput } from "../commands/DescribeAnomalyDetectorsCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAnomalyDetectors: (config: CloudWatchPaginationConfiguration, input: DescribeAnomalyDetectorsCommandInput, ...rest: any[]) => Paginator<DescribeAnomalyDetectorsCommandOutput>;
