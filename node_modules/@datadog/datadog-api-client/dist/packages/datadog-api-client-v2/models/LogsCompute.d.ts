/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregationFunction } from "./LogsAggregationFunction";
import { LogsComputeType } from "./LogsComputeType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A compute rule to compute metrics or timeseries
 */
export declare class LogsCompute {
    /**
     * An aggregation function
     */
    "aggregation": LogsAggregationFunction;
    /**
     * The time buckets' size (only used for type=timeseries)
     * Defaults to a resolution of 150 points
     */
    "interval"?: string;
    /**
     * The metric to use
     */
    "metric"?: string;
    /**
     * The type of compute
     */
    "type"?: LogsComputeType;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
