"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactRelationships = void 0;
/**
 * The incident impact's resource relationships.
 */
class IncidentImpactRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactRelationships.attributeTypeMap;
    }
}
exports.IncidentImpactRelationships = IncidentImpactRelationships;
/**
 * @ignore
 */
IncidentImpactRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
    },
    incident: {
        baseName: "incident",
        type: "RelationshipToIncident",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImpactRelationships.js.map