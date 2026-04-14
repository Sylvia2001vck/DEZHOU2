"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceResponse = void 0;
/**
 * Response with an incident service payload.
 */
class IncidentServiceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceResponse.attributeTypeMap;
    }
}
exports.IncidentServiceResponse = IncidentServiceResponse;
/**
 * @ignore
 */
IncidentServiceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentServiceResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentServiceIncludedItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentServiceResponse.js.map