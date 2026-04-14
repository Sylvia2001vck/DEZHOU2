/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineReduceProcessorMergeStrategy } from "./ObservabilityPipelineReduceProcessorMergeStrategy";
import { ObservabilityPipelineReduceProcessorType } from "./ObservabilityPipelineReduceProcessorType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `reduce` processor aggregates and merges logs based on matching keys and merge strategies.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineReduceProcessor {
    /**
     * The display name for a component.
     */
    "displayName"?: string;
    /**
     * Indicates whether the processor is enabled.
     */
    "enabled": boolean;
    /**
     * A list of fields used to group log events for merging.
     */
    "groupBy": Array<string>;
    /**
     * The unique identifier for this processor.
     */
    "id": string;
    /**
     * A Datadog search query used to determine which logs this processor targets.
     */
    "include": string;
    /**
     * List of merge strategies defining how values from grouped events should be combined.
     */
    "mergeStrategies": Array<ObservabilityPipelineReduceProcessorMergeStrategy>;
    /**
     * The processor type. The value should always be `reduce`.
     */
    "type": ObservabilityPipelineReduceProcessorType;
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
