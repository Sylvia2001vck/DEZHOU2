/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The aggregation type.
 */
export declare type SecurityMonitoringRuleQueryAggregation = typeof COUNT | typeof CARDINALITY | typeof SUM | typeof MAX | typeof NEW_VALUE | typeof GEO_DATA | typeof EVENT_COUNT | typeof NONE | UnparsedObject;
export declare const COUNT = "count";
export declare const CARDINALITY = "cardinality";
export declare const SUM = "sum";
export declare const MAX = "max";
export declare const NEW_VALUE = "new_value";
export declare const GEO_DATA = "geo_data";
export declare const EVENT_COUNT = "event_count";
export declare const NONE = "none";
