/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy } from "./ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Strategy that increments a generated metric based on the value of a log field.
 */
export declare class ObservabilityPipelineGeneratedMetricIncrementByField {
    /**
     * Name of the log field containing the numeric value to increment the metric by.
     */
    "field": string;
    /**
     * Uses a numeric field in the log event as the metric increment.
     */
    "strategy": ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy;
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
