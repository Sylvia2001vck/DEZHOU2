/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnyValue } from "./AnyValue";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A single LLM Observability dataset record.
 */
export declare class LLMObsDatasetRecordDataResponse {
    /**
     * Timestamp when the record was created.
     */
    "createdAt": Date;
    /**
     * Identifier of the dataset this record belongs to.
     */
    "datasetId": string;
    /**
     * Represents any valid JSON value.
     */
    "expectedOutput": AnyValue | null;
    /**
     * Unique identifier of the record.
     */
    "id": string;
    /**
     * Represents any valid JSON value.
     */
    "input": AnyValue | null;
    /**
     * Arbitrary metadata associated with the record.
     */
    "metadata": {
        [key: string]: any;
    } | null;
    /**
     * Timestamp when the record was last updated.
     */
    "updatedAt": Date;
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
