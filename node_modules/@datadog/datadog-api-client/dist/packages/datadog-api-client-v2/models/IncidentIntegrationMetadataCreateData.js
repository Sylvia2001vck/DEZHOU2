"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataCreateData = void 0;
/**
 * Incident integration metadata data for a create request.
 */
class IncidentIntegrationMetadataCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataCreateData.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataCreateData = IncidentIntegrationMetadataCreateData;
/**
 * @ignore
 */
IncidentIntegrationMetadataCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentIntegrationMetadataAttributes",
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
//# sourceMappingURL=IncidentIntegrationMetadataCreateData.js.map