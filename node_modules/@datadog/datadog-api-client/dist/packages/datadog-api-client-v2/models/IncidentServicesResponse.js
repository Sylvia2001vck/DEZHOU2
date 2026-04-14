"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServicesResponse = void 0;
/**
 * Response with a list of incident service payloads.
 */
class IncidentServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServicesResponse.attributeTypeMap;
    }
}
exports.IncidentServicesResponse = IncidentServicesResponse;
/**
 * @ignore
 */
IncidentServicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentServiceResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentServiceIncludedItems>",
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
//# sourceMappingURL=IncidentServicesResponse.js.map