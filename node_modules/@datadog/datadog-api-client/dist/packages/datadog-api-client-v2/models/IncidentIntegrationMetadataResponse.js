"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentIntegrationMetadataResponse = void 0;
/**
 * Response with an incident integration metadata.
 */
class IncidentIntegrationMetadataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentIntegrationMetadataResponse.attributeTypeMap;
    }
}
exports.IncidentIntegrationMetadataResponse = IncidentIntegrationMetadataResponse;
/**
 * @ignore
 */
IncidentIntegrationMetadataResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentIntegrationMetadataResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentIntegrationMetadataResponse.js.map