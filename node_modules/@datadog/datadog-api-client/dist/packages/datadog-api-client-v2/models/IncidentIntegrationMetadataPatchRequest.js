"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataPatchRequest = void 0;
/**
 * Patch request for an incident integration metadata.
 */
class IncidentIntegrationMetadataPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataPatchRequest.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataPatchRequest = IncidentIntegrationMetadataPatchRequest;
/**
 * @ignore
 */
IncidentIntegrationMetadataPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentIntegrationMetadataPatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentIntegrationMetadataPatchRequest.js.map