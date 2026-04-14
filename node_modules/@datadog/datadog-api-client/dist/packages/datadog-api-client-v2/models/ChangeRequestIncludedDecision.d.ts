/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestDecisionRelationships } from "./ChangeRequestDecisionRelationships";
import { ChangeRequestDecisionResourceType } from "./ChangeRequestDecisionResourceType";
import { ChangeRequestDecisionResponseAttributes } from "./ChangeRequestDecisionResponseAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * An included change request decision resource.
 */
export declare class ChangeRequestIncludedDecision {
    /**
     * Attributes of a change request decision in a response.
     */
    "attributes": ChangeRequestDecisionResponseAttributes;
    /**
     * The decision UUID.
     */
    "id": string;
    /**
     * Relationships of a change request decision.
     */
    "relationships"?: ChangeRequestDecisionRelationships;
    /**
     * Change request decision resource type.
     */
    "type": ChangeRequestDecisionResourceType;
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
