"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRuleRelationshipsPolicy = void 0;
/**
 * Defines the relationship that links a routing rule to a policy.
 */
class RoutingRuleRelationshipsPolicy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoutingRuleRelationshipsPolicy.attributeTypeMap;
    }
}
exports.RoutingRuleRelationshipsPolicy = RoutingRuleRelationshipsPolicy;
/**
 * @ignore
 */
RoutingRuleRelationshipsPolicy.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoutingRuleRelationshipsPolicyData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoutingRuleRelationshipsPolicy.js.map