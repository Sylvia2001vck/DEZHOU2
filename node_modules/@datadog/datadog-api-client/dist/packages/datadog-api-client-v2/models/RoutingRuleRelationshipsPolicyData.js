"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRuleRelationshipsPolicyData = void 0;
/**
 * Represents the policy data reference, containing the policy's ID and resource type.
 */
class RoutingRuleRelationshipsPolicyData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoutingRuleRelationshipsPolicyData.attributeTypeMap;
    }
}
exports.RoutingRuleRelationshipsPolicyData = RoutingRuleRelationshipsPolicyData;
/**
 * @ignore
 */
RoutingRuleRelationshipsPolicyData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RoutingRuleRelationshipsPolicyDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoutingRuleRelationshipsPolicyData.js.map