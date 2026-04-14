"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponseRelationships = void 0;
/**
 * The incident's relationships from a response.
 */
class IncidentResponseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponseRelationships.attributeTypeMap;
    }
}
exports.IncidentResponseRelationships = IncidentResponseRelationships;
/**
 * @ignore
 */
IncidentResponseRelationships.attributeTypeMap = {
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
//# sourceMappingURL=IncidentResponseRelationships.js.map