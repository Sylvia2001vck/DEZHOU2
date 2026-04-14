"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentIntegrationMetadataData = void 0;
/**
 * A relationship reference for an integration metadata object.
 */
class RelationshipToIncidentIntegrationMetadataData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentIntegrationMetadataData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentIntegrationMetadataData = RelationshipToIncidentIntegrationMetadataData;
/**
 * @ignore
 */
RelationshipToIncidentIntegrationMetadataData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentIntegrationMetadataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentIntegrationMetadataData.js.map