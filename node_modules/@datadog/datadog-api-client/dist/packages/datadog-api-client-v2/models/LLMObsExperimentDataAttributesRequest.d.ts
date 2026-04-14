/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for creating an LLM Observability experiment.
 */
export declare class LLMObsExperimentDataAttributesRequest {
    /**
     * Configuration parameters for the experiment.
     */
    "config"?: {
        [key: string]: any;
    };
    /**
     * Identifier of the dataset used in this experiment.
     */
    "datasetId": string;
    /**
     * Version of the dataset to use. Defaults to the current version if not specified.
     */
    "datasetVersion"?: number;
    /**
     * Description of the experiment.
     */
    "description"?: string;
    /**
     * Whether to ensure the experiment name is unique. Defaults to `true`.
     */
    "ensureUnique"?: boolean;
    /**
     * Arbitrary metadata associated with the experiment.
     */
    "metadata"?: {
        [key: string]: any;
    };
    /**
     * Name of the experiment.
     */
    "name": string;
    /**
     * Identifier of the project this experiment belongs to.
     */
    "projectId": string;
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
