"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceRelationships = void 0;
/**
 * The incident service's relationships.
 */
class IncidentServiceRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceRelationships.attributeTypeMap;
    }
}
exports.IncidentServiceRelationships = IncidentServiceRelationships;
/**
 * @ignore
 */
IncidentServiceRelationships.attributeTypeMap = {
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
//# sourceMappingURL=IncidentServiceRelationships.js.map