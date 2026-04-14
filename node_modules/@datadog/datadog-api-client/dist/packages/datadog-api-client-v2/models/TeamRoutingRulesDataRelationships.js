"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesDataRelationships = void 0;
/**
 * Specifies relationships for team routing rules, including rule references.
 */
class TeamRoutingRulesDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesDataRelationships.attributeTypeMap;
    }
}
exports.TeamRoutingRulesDataRelationships = TeamRoutingRulesDataRelationships;
/**
 * @ignore
 */
TeamRoutingRulesDataRelationships.attributeTypeMap = {
    rules: {
        baseName: "rules",
        type: "TeamRoutingRulesDataRelationshipsRules",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesDataRelationships.js.map