"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAttributes = void 0;
/**
 * Project attributes
 */
class ProjectAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectAttributes.attributeTypeMap;
    }
}
exports.ProjectAttributes = ProjectAttributes;
/**
 * @ignore
 */
ProjectAttributes.attributeTypeMap = {
    columnsConfig: {
        baseName: "columns_config",
        type: "ProjectColumnsConfig",
    },
    enabledCustomCaseTypes: {
        baseName: "enabled_custom_case_types",
        type: "Array<string>",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    restricted: {
        baseName: "restricted",
        type: "boolean",
    },
    settings: {
        baseName: "settings",
        type: "ProjectSettings",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectAttributes.js.map