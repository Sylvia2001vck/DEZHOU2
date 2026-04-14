/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { V2EventAttributesAttributes } from "./V2EventAttributesAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Event attributes.
 */
export declare class V2EventAttributes {
    /**
     * JSON object for category-specific attributes.
     */
    "attributes"?: V2EventAttributesAttributes;
    /**
     * Free-form text associated with the event.
     */
    "message"?: string;
    /**
     * A list of tags associated with the event.
     */
    "tags"?: Array<string>;
    /**
     * Timestamp when the event occurred.
     */
    "timestamp"?: string;
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
