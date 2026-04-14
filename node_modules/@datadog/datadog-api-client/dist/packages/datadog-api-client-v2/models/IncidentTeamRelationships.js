"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamRelationships = void 0;
/**
 * The incident team's relationships.
 */
class IncidentTeamRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamRelationships.attributeTypeMap;
    }
}
exports.IncidentTeamRelationships = IncidentTeamRelationships;
/**
 * @ignore
 */
IncidentTeamRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "RelationshipToUser",
    },
    lastModifiedBy: {
        baseName: "last_modified_by",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamRelationships.js.map