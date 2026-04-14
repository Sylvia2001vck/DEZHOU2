"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationship = void 0;
/**
 * Relationship to project
 */
class ProjectRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectRelationship.attributeTypeMap;
    }
}
exports.ProjectRelationship = ProjectRelationship;
/**
 * @ignore
 */
ProjectRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProjectRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectRelationship.js.map