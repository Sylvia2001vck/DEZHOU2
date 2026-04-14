/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamType } from "./TeamType";
import { TeamUpdateAttributes } from "./TeamUpdateAttributes";
import { TeamUpdateRelationships } from "./TeamUpdateRelationships";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Team update request
 */
export declare class TeamUpdate {
    /**
     * Team update attributes
     */
    "attributes": TeamUpdateAttributes;
    /**
     * Team update relationships
     */
    "relationships"?: TeamUpdateRelationships;
    /**
     * Team type
     */
    "type": TeamType;
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
