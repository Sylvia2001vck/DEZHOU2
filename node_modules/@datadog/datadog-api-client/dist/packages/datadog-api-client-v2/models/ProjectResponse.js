"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResponse = void 0;
/**
 * Project response
 */
class ProjectResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectResponse.attributeTypeMap;
    }
}
exports.ProjectResponse = ProjectResponse;
/**
 * @ignore
 */
ProjectResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Project",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectResponse.js.map