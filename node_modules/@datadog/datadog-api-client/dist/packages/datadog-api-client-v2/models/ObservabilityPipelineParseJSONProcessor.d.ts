/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseJSONProcessorType } from "./ObservabilityPipelineParseJSONProcessorType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `parse_json` processor extracts JSON from a specified field and flattens it into the event. This is useful when logs contain embedded JSON as a string.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineParseJSONProcessor {
    /**
     * The display name for a component.
     */
    "displayName"?: string;
    /**
     * Indicates whether the processor is enabled.
     */
    "enabled": boolean;
    /**
     * The name of the log field that contains a JSON string.
     */
    "field": string;
    /**
     * A unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
     */
    "id": string;
    /**
     * A Datadog search query used to determine which logs this processor targets.
     */
    "include": string;
    /**
     * The processor type. The value should always be `parse_json`.
     */
    "type": ObservabilityPipelineParseJSONProcessorType;
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
