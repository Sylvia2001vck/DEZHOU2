"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesRequestDataAttributes = void 0;
/**
 * Represents the attributes of a request to update or create team routing rules.
 */
class TeamRoutingRulesRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesRequestDataAttributes.attributeTypeMap;
    }
}
exports.TeamRoutingRulesRequestDataAttributes = TeamRoutingRulesRequestDataAttributes;
/**
 * @ignore
 */
TeamRoutingRulesRequestDataAttributes.attributeTypeMap = {
    rules: {
        baseName: "rules",
        type: "Array<TeamRoutingRulesRequestRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesRequestDataAttributes.js.map