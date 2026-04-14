"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesDataRelationshipsRules = void 0;
/**
 * Holds references to a set of routing rules in a relationship.
 */
class TeamRoutingRulesDataRelationshipsRules {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesDataRelationshipsRules.attributeTypeMap;
    }
}
exports.TeamRoutingRulesDataRelationshipsRules = TeamRoutingRulesDataRelationshipsRules;
/**
 * @ignore
 */
TeamRoutingRulesDataRelationshipsRules.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamRoutingRulesDataRelationshipsRulesDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesDataRelationshipsRules.js.map