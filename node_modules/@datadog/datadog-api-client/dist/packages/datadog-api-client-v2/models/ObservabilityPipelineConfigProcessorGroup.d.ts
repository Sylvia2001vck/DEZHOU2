/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineConfigProcessorItem } from "./ObservabilityPipelineConfigProcessorItem";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A group of processors.
 */
export declare class ObservabilityPipelineConfigProcessorGroup {
    /**
     * The display name for a component.
     */
    "displayName"?: string;
    /**
     * Whether this processor group is enabled.
     */
    "enabled": boolean;
    /**
     * The unique identifier for the processor group.
     */
    "id": string;
    /**
     * Conditional expression for when this processor group should execute.
     */
    "include": string;
    /**
     * A list of IDs for components whose output is used as the input for this processor group.
     */
    "inputs": Array<string>;
    /**
     * Processors applied sequentially within this group. Events flow through each processor in order.
     */
    "processors": Array<ObservabilityPipelineConfigProcessorItem>;
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
