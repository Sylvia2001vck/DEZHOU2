"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesData = void 0;
/**
 * Represents the top-level data object for team routing rules, containing the ID, relationships, and resource type.
 */
class TeamRoutingRulesData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesData.attributeTypeMap;
    }
}
exports.TeamRoutingRulesData = TeamRoutingRulesData;
/**
 * @ignore
 */
TeamRoutingRulesData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "TeamRoutingRulesDataRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamRoutingRulesDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesData.js.map