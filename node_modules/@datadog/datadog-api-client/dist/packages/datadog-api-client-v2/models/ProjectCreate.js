"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreate = void 0;
/**
 * Project create
 */
class ProjectCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectCreate.attributeTypeMap;
    }
}
exports.ProjectCreate = ProjectCreate;
/**
 * @ignore
 */
ProjectCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProjectCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ProjectResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectCreate.js.map