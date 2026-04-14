/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingAttributes } from "./FindingAttributes";
import { FindingType } from "./FindingType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A single finding without the message and resource configuration.
 */
export declare class Finding {
    /**
     * The JSON:API attributes of the finding.
     */
    "attributes"?: FindingAttributes;
    /**
     * The unique ID for this finding.
     */
    "id"?: string;
    /**
     * The JSON:API type for findings.
     */
    "type"?: FindingType;
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
