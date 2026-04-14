"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateRequest = void 0;
/**
 * Project create request
 */
class ProjectCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectCreateRequest.attributeTypeMap;
    }
}
exports.ProjectCreateRequest = ProjectCreateRequest;
/**
 * @ignore
 */
ProjectCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProjectCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectCreateRequest.js.map