import type { Paginator } from "@smithy/types";
import { DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput } from "../commands/DescribeAlarmHistoryCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAlarmHistory: (config: CloudWatchPaginationConfiguration, input: DescribeAlarmHistoryCommandInput, ...rest: any[]) => Paginator<DescribeAlarmHistoryCommandOutput>;
