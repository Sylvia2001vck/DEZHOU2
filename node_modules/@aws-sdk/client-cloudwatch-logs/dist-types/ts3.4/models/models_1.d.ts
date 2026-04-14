import { ExecutionStatus, QueryLanguage, ScheduledQueryState } from "./enums";
import { DestinationConfiguration } from "./models_0";
export interface UpdateLookupTableResponse {
  lookupTableArn?: string | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface UpdateScheduledQueryRequest {
  identifier: string | undefined;
  description?: string | undefined;
  queryLanguage: QueryLanguage | undefined;
  queryString: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn: string | undefined;
  state?: ScheduledQueryState | undefined;
}
export interface UpdateScheduledQueryResponse {
  scheduledQueryArn?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  queryLanguage?: QueryLanguage | undefined;
  queryString?: string | undefined;
  logGroupIdentifiers?: string[] | undefined;
  scheduleExpression?: string | undefined;
  timezone?: string | undefined;
  startTimeOffset?: number | undefined;
  destinationConfiguration?: DestinationConfiguration | undefined;
  state?: ScheduledQueryState | undefined;
  lastTriggeredTime?: number | undefined;
  lastExecutionStatus?: ExecutionStatus | undefined;
  scheduleStartTime?: number | undefined;
  scheduleEndTime?: number | undefined;
  executionRoleArn?: string | undefined;
  creationTime?: number | undefined;
  lastUpdatedTime?: number | undefined;
}
export interface LogFieldType {
  type?: string | undefined;
  element?: LogFieldType | undefined;
  fields?: LogFieldsListItem[] | undefined;
}
export interface LogFieldsListItem {
  logFieldName?: string | undefined;
  logFieldType?: LogFieldType | undefined;
}
export interface GetLogFieldsResponse {
  logFields?: LogFieldsListItem[] | undefined;
}
