"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesRequestRule = void 0;
/**
 * Defines an individual routing rule item that contains the rule data for the request.
 */
class TeamRoutingRulesRequestRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesRequestRule.attributeTypeMap;
    }
}
exports.TeamRoutingRulesRequestRule = TeamRoutingRulesRequestRule;
/**
 * @ignore
 */
TeamRoutingRulesRequestRule.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<RoutingRuleAction>",
    },
    policyId: {
        baseName: "policy_id",
        type: "string",
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
//# sourceMappingURL=TeamRoutingRulesRequestRule.js.map