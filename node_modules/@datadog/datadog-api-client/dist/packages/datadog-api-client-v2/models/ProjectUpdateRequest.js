"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateRequest = void 0;
/**
 * Project update request
 */
class ProjectUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectUpdateRequest.attributeTypeMap;
    }
}
exports.ProjectUpdateRequest = ProjectUpdateRequest;
/**
 * @ignore
 */
ProjectUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProjectUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectUpdateRequest.js.map