"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRule = void 0;
/**
 * Represents a routing rule, including its attributes, relationships, and unique identifier.
 */
class RoutingRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoutingRule.attributeTypeMap;
    }
}
exports.RoutingRule = RoutingRule;
/**
 * @ignore
 */
RoutingRule.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoutingRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RoutingRuleRelationships",
    },
    type: {
        baseName: "type",
        type: "RoutingRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoutingRule.js.map