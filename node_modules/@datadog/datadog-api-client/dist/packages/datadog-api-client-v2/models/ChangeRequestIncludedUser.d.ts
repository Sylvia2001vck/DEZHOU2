/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestIncludedUserAttributes } from "./ChangeRequestIncludedUserAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * An included user resource.
 */
export declare class ChangeRequestIncludedUser {
    /**
     * Attributes of an included user.
     */
    "attributes": ChangeRequestIncludedUserAttributes;
    /**
     * The user UUID.
     */
    "id": string;
    /**
     * The resource type.
     */
    "type": string;
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
