"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLink = void 0;
/**
 * Team hierarchy link
 */
class TeamHierarchyLink {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLink.attributeTypeMap;
    }
}
exports.TeamHierarchyLink = TeamHierarchyLink;
/**
 * @ignore
 */
TeamHierarchyLink.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamHierarchyLinkAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "TeamHierarchyLinkRelationships",
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
//# sourceMappingURL=TeamHierarchyLink.js.map