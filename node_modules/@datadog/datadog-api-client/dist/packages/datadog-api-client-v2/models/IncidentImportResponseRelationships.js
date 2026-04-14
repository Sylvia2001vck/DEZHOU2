"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportResponseRelationships = void 0;
/**
 * The incident's relationships from an import response.
 */
class IncidentImportResponseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportResponseRelationships.attributeTypeMap;
    }
}
exports.IncidentImportResponseRelationships = IncidentImportResponseRelationships;
/**
 * @ignore
 */
IncidentImportResponseRelationships.attributeTypeMap = {
    attachments: {
        baseName: "attachments",
        type: "RelationshipToIncidentAttachment",
    },
    commanderUser: {
        baseName: "commander_user",
        type: "NullableRelationshipToUser",
    },
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
    },
    declaredByUser: {
        baseName: "declared_by_user",
        type: "RelationshipToUser",
    },
    impacts: {
        baseName: "impacts",
        type: "RelationshipToIncidentImpacts",
    },
    incidentType: {
        baseName: "incident_type",
        type: "RelationshipToIncidentType",
    },
    integrations: {
        baseName: "integrations",
        type: "RelationshipToIncidentIntegrationMetadatas",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
    },
    responders: {
        baseName: "responders",
        type: "RelationshipToIncidentResponders",
    },
    userDefinedFields: {
        baseName: "user_defined_fields",
        type: "RelationshipToIncidentUserDefinedFields",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportResponseRelationships.js.map