"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectColumnsConfigColumnsItems = void 0;
class ProjectColumnsConfigColumnsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectColumnsConfigColumnsItems.attributeTypeMap;
    }
}
exports.ProjectColumnsConfigColumnsItems = ProjectColumnsConfigColumnsItems;
/**
 * @ignore
 */
ProjectColumnsConfigColumnsItems.attributeTypeMap = {
    sort: {
        baseName: "sort",
        type: "ProjectColumnsConfigColumnsItemsSort",
    },
    sortField: {
        baseName: "sort_field",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectColumnsConfigColumnsItems.js.map