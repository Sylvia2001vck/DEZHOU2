"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationships = void 0;
/**
 * Project relationships
 */
class ProjectRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectRelationships.attributeTypeMap;
    }
}
exports.ProjectRelationships = ProjectRelationships;
/**
 * @ignore
 */
ProjectRelationships.attributeTypeMap = {
    memberTeam: {
        baseName: "member_team",
        type: "RelationshipToTeamLinks",
    },
    memberUser: {
        baseName: "member_user",
        type: "UsersRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectRelationships.js.map