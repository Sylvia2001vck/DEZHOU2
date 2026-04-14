"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
/**
 * A Project
 */
class Project {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }
}
exports.Project = Project;
/**
 * @ignore
 */
Project.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProjectAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ProjectRelationships",
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
//# sourceMappingURL=Project.js.map