"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsResponse = void 0;
/**
 * Response with projects
 */
class ProjectsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectsResponse.attributeTypeMap;
    }
}
exports.ProjectsResponse = ProjectsResponse;
/**
 * @ignore
 */
ProjectsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Project>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectsResponse.js.map