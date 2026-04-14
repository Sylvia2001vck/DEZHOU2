/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of aggregation that can be performed on metrics-based queries.
 */
export declare type MetricsAggregator = typeof AVG | typeof MIN | typeof MAX | typeof SUM | typeof LAST | typeof PERCENTILE | typeof MEAN | typeof L2NORM | typeof AREA | UnparsedObject;
export declare const AVG = "avg";
export declare const MIN = "min";
export declare const MAX = "max";
export declare const SUM = "sum";
export declare const LAST = "last";
export declare const PERCENTILE = "percentile";
export declare const MEAN = "mean";
export declare const L2NORM = "l2norm";
export declare const AREA = "area";
