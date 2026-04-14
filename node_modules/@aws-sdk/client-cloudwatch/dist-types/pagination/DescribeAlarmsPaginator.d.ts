import type { Paginator } from "@smithy/types";
import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "../commands/DescribeAlarmsCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAlarms: (config: CloudWatchPaginationConfiguration, input: DescribeAlarmsCommandInput, ...rest: any[]) => Paginator<DescribeAlarmsCommandOutput>;
