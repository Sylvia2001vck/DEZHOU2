"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRules = void 0;
/**
 * Represents a complete set of team routing rules, including data and optionally included related resources.
 */
class TeamRoutingRules {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRules.attributeTypeMap;
    }
}
exports.TeamRoutingRules = TeamRoutingRules;
/**
 * @ignore
 */
TeamRoutingRules.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamRoutingRulesData",
    },
    included: {
        baseName: "included",
        type: "Array<TeamRoutingRulesIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRules.js.map