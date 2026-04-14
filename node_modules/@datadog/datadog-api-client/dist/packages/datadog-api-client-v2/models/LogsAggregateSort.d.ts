/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateSortType } from "./LogsAggregateSortType";
import { LogsAggregationFunction } from "./LogsAggregationFunction";
import { LogsSortOrder } from "./LogsSortOrder";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A sort rule
 */
export declare class LogsAggregateSort {
    /**
     * An aggregation function
     */
    "aggregation"?: LogsAggregationFunction;
    /**
     * The metric to sort by (only used for `type=measure`)
     */
    "metric"?: string;
    /**
     * The order to use, ascending or descending
     */
    "order"?: LogsSortOrder;
    /**
     * The type of sorting algorithm
     */
    "type"?: LogsAggregateSortType;
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
