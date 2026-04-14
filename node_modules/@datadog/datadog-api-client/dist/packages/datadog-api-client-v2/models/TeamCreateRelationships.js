"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateRelationships = void 0;
/**
 * Relationships formed with the team on creation
 */
class TeamCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamCreateRelationships.attributeTypeMap;
    }
}
exports.TeamCreateRelationships = TeamCreateRelationships;
/**
 * @ignore
 */
TeamCreateRelationships.attributeTypeMap = {
    users: {
        baseName: "users",
        type: "RelationshipToUsers",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamCreateRelationships.js.map