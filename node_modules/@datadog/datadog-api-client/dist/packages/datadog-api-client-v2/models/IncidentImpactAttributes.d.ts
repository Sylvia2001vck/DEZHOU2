/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The incident impact's attributes.
 */
export declare class IncidentImpactAttributes {
    /**
     * Timestamp when the impact was created.
     */
    "created"?: Date;
    /**
     * Description of the impact.
     */
    "description": string;
    /**
     * Timestamp when the impact ended.
     */
    "endAt"?: Date;
    /**
     * An object mapping impact field names to field values.
     */
    "fields"?: {
        [key: string]: any;
    };
    /**
     * The type of impact.
     */
    "impactType"?: string;
    /**
     * Timestamp when the impact was last modified.
     */
    "modified"?: Date;
    /**
     * Timestamp representing when the impact started.
     */
    "startAt": Date;
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
