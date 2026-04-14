"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataResponseData = void 0;
/**
 * Incident integration metadata from a response.
 */
class IncidentIntegrationMetadataResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataResponseData.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataResponseData = IncidentIntegrationMetadataResponseData;
/**
 * @ignore
 */
IncidentIntegrationMetadataResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentIntegrationMetadataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentIntegrationRelationships",
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
//# sourceMappingURL=IncidentIntegrationMetadataResponseData.js.map