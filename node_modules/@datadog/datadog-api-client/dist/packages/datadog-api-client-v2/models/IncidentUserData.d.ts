/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserAttributes } from "./IncidentUserAttributes";
import { UsersType } from "./UsersType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * User object returned by the API.
 */
export declare class IncidentUserData {
    /**
     * Attributes of user object returned by the API.
     */
    "attributes"?: IncidentUserAttributes;
    /**
     * ID of the user.
     */
    "id"?: string;
    /**
     * Users resource type.
     */
    "type"?: UsersType;
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
