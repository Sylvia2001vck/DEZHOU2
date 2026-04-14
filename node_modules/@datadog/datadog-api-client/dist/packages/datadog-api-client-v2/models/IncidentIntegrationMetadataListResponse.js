"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataListResponse = void 0;
/**
 * Response with a list of incident integration metadata.
 */
class IncidentIntegrationMetadataListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataListResponse.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataListResponse = IncidentIntegrationMetadataListResponse;
/**
 * @ignore
 */
IncidentIntegrationMetadataListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentIntegrationMetadataResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentIntegrationMetadataListResponse.js.map