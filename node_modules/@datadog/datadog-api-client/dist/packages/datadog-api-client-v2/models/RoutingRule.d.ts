/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoutingRuleAttributes } from "./RoutingRuleAttributes";
import { RoutingRuleRelationships } from "./RoutingRuleRelationships";
import { RoutingRuleType } from "./RoutingRuleType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Represents a routing rule, including its attributes, relationships, and unique identifier.
 */
export declare class RoutingRule {
    /**
     * Defines the configurable attributes of a routing rule, such as actions, query, time restriction, and urgency.
     */
    "attributes"?: RoutingRuleAttributes;
    /**
     * Specifies the unique identifier of this routing rule.
     */
    "id"?: string;
    /**
     * Specifies relationships for a routing rule, linking to associated policy resources.
     */
    "relationships"?: RoutingRuleRelationships;
    /**
     * Team routing rules resource type.
     */
    "type": RoutingRuleType;
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
