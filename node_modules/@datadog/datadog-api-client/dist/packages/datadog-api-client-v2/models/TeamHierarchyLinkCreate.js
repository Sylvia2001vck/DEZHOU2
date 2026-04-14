"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkCreate = void 0;
/**
 * Data provided when creating a team hierarchy link
 */
class TeamHierarchyLinkCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkCreate.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkCreate = TeamHierarchyLinkCreate;
/**
 * @ignore
 */
TeamHierarchyLinkCreate.attributeTypeMap = {
    relationships: {
        baseName: "relationships",
        type: "TeamHierarchyLinkCreateRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamHierarchyLinkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkCreate.js.map