"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsHierarchyLinksResponseMeta = void 0;
/**
 * Metadata that is included in the response when querying the team hierarchy links
 */
class TeamsHierarchyLinksResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamsHierarchyLinksResponseMeta.attributeTypeMap;
    }
}
exports.TeamsHierarchyLinksResponseMeta = TeamsHierarchyLinksResponseMeta;
/**
 * @ignore
 */
TeamsHierarchyLinksResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "TeamsHierarchyLinksResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamsHierarchyLinksResponseMeta.js.map