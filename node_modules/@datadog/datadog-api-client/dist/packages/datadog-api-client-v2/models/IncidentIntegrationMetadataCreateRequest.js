"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataCreateRequest = void 0;
/**
 * Create request for an incident integration metadata.
 */
class IncidentIntegrationMetadataCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataCreateRequest.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataCreateRequest = IncidentIntegrationMetadataCreateRequest;
/**
 * @ignore
 */
IncidentIntegrationMetadataCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentIntegrationMetadataCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentIntegrationMetadataCreateRequest.js.map