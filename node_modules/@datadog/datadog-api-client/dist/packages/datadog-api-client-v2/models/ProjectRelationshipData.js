"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationshipData = void 0;
/**
 * Relationship to project object
 */
class ProjectRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectRelationshipData.attributeTypeMap;
    }
}
exports.ProjectRelationshipData = ProjectRelationshipData;
/**
 * @ignore
 */
ProjectRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ProjectRelationshipData.js.map