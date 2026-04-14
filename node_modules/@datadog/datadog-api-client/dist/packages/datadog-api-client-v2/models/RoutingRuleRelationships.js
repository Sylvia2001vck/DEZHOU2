"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRuleRelationships = void 0;
/**
 * Specifies relationships for a routing rule, linking to associated policy resources.
 */
class RoutingRuleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoutingRuleRelationships.attributeTypeMap;
    }
}
exports.RoutingRuleRelationships = RoutingRuleRelationships;
/**
 * @ignore
 */
RoutingRuleRelationships.attributeTypeMap = {
    policy: {
        baseName: "policy",
        type: "RoutingRuleRelationshipsPolicy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoutingRuleRelationships.js.map