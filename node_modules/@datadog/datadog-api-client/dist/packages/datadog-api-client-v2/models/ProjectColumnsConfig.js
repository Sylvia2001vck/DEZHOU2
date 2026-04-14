"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectColumnsConfig = void 0;
/**
 * Project columns configuration
 */
class ProjectColumnsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectColumnsConfig.attributeTypeMap;
    }
}
exports.ProjectColumnsConfig = ProjectColumnsConfig;
/**
 * @ignore
 */
ProjectColumnsConfig.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ProjectColumnsConfigColumnsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectColumnsConfig.js.map