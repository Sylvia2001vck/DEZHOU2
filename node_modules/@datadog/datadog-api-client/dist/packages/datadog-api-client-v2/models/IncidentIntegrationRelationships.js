"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationRelationships = void 0;
/**
 * The incident's integration relationships from a response.
 */
class IncidentIntegrationRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationRelationships.attributeTypeMap;
    }
}
exports.IncidentIntegrationRelationships = IncidentIntegrationRelationships;
/**
 * @ignore
 */
IncidentIntegrationRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
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
//# sourceMappingURL=IncidentIntegrationRelationships.js.map