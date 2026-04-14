/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RestrictionPolicyAttributes } from "./RestrictionPolicyAttributes";
import { RestrictionPolicyType } from "./RestrictionPolicyType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Restriction policy object.
 */
export declare class RestrictionPolicy {
    /**
     * Restriction policy attributes.
     */
    "attributes": RestrictionPolicyAttributes;
    /**
     * The identifier, always equivalent to the value specified in the `resource_id` path parameter.
     */
    "id": string;
    /**
     * Restriction policy type.
     */
    "type": RestrictionPolicyType;
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
