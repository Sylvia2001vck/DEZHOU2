/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentMetricError } from "./LLMObsExperimentMetricError";
import { LLMObsMetricAssessment } from "./LLMObsMetricAssessment";
import { LLMObsMetricScoreType } from "./LLMObsMetricScoreType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A metric associated with an LLM Observability experiment span.
 */
export declare class LLMObsExperimentMetric {
    /**
     * Assessment result for an LLM Observability experiment metric.
     */
    "assessment"?: LLMObsMetricAssessment;
    /**
     * Boolean value. Used when `metric_type` is `boolean`.
     */
    "booleanValue"?: boolean;
    /**
     * Categorical value. Used when `metric_type` is `categorical`.
     */
    "categoricalValue"?: string;
    /**
     * Error details for an experiment metric evaluation.
     */
    "error"?: LLMObsExperimentMetricError;
    /**
     * JSON value. Used when `metric_type` is `json`.
     */
    "jsonValue"?: {
        [key: string]: any;
    };
    /**
     * Label or name for the metric.
     */
    "label": string;
    /**
     * Arbitrary metadata associated with the metric.
     */
    "metadata"?: {
        [key: string]: any;
    };
    /**
     * Type of metric recorded for an LLM Observability experiment.
     */
    "metricType": LLMObsMetricScoreType;
    /**
     * Human-readable reasoning for the metric value.
     */
    "reasoning"?: string;
    /**
     * Numeric score value. Used when `metric_type` is `score`.
     */
    "scoreValue"?: number;
    /**
     * The ID of the span this metric measures.
     */
    "spanId": string;
    /**
     * List of tags associated with the metric.
     */
    "tags"?: Array<string>;
    /**
     * Timestamp when the metric was recorded, in milliseconds since Unix epoch.
     */
    "timestampMs": number;
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
