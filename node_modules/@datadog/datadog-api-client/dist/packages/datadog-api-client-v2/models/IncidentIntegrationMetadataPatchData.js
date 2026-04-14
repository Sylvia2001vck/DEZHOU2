"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataPatchData = void 0;
/**
 * Incident integration metadata data for a patch request.
 */
class IncidentIntegrationMetadataPatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataPatchData.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataPatchData = IncidentIntegrationMetadataPatchData;
/**
 * @ignore
 */
IncidentIntegrationMetadataPatchData.attributeTypeMap = {
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
//# sourceMappingURL=IncidentIntegrationMetadataPatchData.js.map