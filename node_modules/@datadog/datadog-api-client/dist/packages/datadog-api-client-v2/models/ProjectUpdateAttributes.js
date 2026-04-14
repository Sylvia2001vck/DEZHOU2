"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateAttributes = void 0;
/**
 * Project update attributes
 */
class ProjectUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectUpdateAttributes.attributeTypeMap;
    }
}
exports.ProjectUpdateAttributes = ProjectUpdateAttributes;
/**
 * @ignore
 */
ProjectUpdateAttributes.attributeTypeMap = {
    columnsConfig: {
        baseName: "columns_config",
        type: "ProjectColumnsConfig",
    },
    enabledCustomCaseTypes: {
        baseName: "enabled_custom_case_types",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    settings: {
        baseName: "settings",
        type: "ProjectSettings",
    },
    teamUuid: {
        baseName: "team_uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectUpdateAttributes.js.map