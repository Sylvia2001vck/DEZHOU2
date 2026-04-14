"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRuleAttributes = void 0;
/**
 * Defines the configurable attributes of a routing rule, such as actions, query, time restriction, and urgency.
 */
class RoutingRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoutingRuleAttributes.attributeTypeMap;
    }
}
exports.RoutingRuleAttributes = RoutingRuleAttributes;
/**
 * @ignore
 */
RoutingRuleAttributes.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<RoutingRuleAction>",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    timeRestriction: {
        baseName: "time_restriction",
        type: "TimeRestrictions",
    },
    urgency: {
        baseName: "urgency",
        type: "Urgency",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoutingRuleAttributes.js.map