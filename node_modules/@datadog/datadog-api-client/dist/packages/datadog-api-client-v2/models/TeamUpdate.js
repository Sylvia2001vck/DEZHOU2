"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdate = void 0;
/**
 * Team update request
 */
class TeamUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamUpdate.attributeTypeMap;
    }
}
exports.TeamUpdate = TeamUpdate;
/**
 * @ignore
 */
TeamUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamUpdateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "TeamUpdateRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamUpdate.js.map