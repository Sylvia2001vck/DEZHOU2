/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestRelationships } from "./ChangeRequestRelationships";
import { ChangeRequestResourceType } from "./ChangeRequestResourceType";
import { ChangeRequestResponseAttributes } from "./ChangeRequestResponseAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Data object for a change request response.
 */
export declare class ChangeRequestResponseData {
    /**
     * Attributes of a change request response.
     */
    "attributes": ChangeRequestResponseAttributes;
    /**
     * The identifier of the change request.
     */
    "id": string;
    /**
     * Relationships of a change request.
     */
    "relationships"?: ChangeRequestRelationships;
    /**
     * Change request resource type.
     */
    "type": ChangeRequestResourceType;
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
