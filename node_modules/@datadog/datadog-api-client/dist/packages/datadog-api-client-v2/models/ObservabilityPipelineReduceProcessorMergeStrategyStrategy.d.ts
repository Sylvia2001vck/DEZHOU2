/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The merge strategy to apply.
 */
export declare type ObservabilityPipelineReduceProcessorMergeStrategyStrategy = typeof DISCARD | typeof RETAIN | typeof SUM | typeof MAX | typeof MIN | typeof ARRAY | typeof CONCAT | typeof CONCAT_NEWLINE | typeof CONCAT_RAW | typeof SHORTEST_ARRAY | typeof LONGEST_ARRAY | typeof FLAT_UNIQUE | UnparsedObject;
export declare const DISCARD = "discard";
export declare const RETAIN = "retain";
export declare const SUM = "sum";
export declare const MAX = "max";
export declare const MIN = "min";
export declare const ARRAY = "array";
export declare const CONCAT = "concat";
export declare const CONCAT_NEWLINE = "concat_newline";
export declare const CONCAT_RAW = "concat_raw";
export declare const SHORTEST_ARRAY = "shortest_array";
export declare const LONGEST_ARRAY = "longest_array";
export declare const FLAT_UNIQUE = "flat_unique";
