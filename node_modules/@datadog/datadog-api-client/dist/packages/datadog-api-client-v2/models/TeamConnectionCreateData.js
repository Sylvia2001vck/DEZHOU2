"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionCreateData = void 0;
/**
 * Data for creating a team connection.
 */
class TeamConnectionCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionCreateData.attributeTypeMap;
    }
}
exports.TeamConnectionCreateData = TeamConnectionCreateData;
/**
 * @ignore
 */
TeamConnectionCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamConnectionAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "TeamConnectionRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamConnectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionCreateData.js.map