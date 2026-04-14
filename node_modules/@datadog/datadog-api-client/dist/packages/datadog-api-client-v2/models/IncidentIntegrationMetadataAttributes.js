"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataAttributes = void 0;
/**
 * Incident integration metadata's attributes for a create request.
 */
class IncidentIntegrationMetadataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataAttributes.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataAttributes = IncidentIntegrationMetadataAttributes;
/**
 * @ignore
 */
IncidentIntegrationMetadataAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    incidentId: {
        baseName: "incident_id",
        type: "string",
    },
    integrationType: {
        baseName: "integration_type",
        type: "number",
        required: true,
        format: "int32",
    },
    metadata: {
        baseName: "metadata",
        type: "IncidentIntegrationMetadataMetadata",
        required: true,
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentIntegrationMetadataAttributes.js.map