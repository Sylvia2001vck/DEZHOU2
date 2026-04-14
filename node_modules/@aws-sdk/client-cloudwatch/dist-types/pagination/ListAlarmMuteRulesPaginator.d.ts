import type { Paginator } from "@smithy/types";
import { ListAlarmMuteRulesCommandInput, ListAlarmMuteRulesCommandOutput } from "../commands/ListAlarmMuteRulesCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAlarmMuteRules: (config: CloudWatchPaginationConfiguration, input: ListAlarmMuteRulesCommandInput, ...rest: any[]) => Paginator<ListAlarmMuteRulesCommandOutput>;
