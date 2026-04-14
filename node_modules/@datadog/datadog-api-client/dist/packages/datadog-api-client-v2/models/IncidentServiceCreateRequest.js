"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceCreateRequest = void 0;
/**
 * Create request with an incident service payload.
 */
class IncidentServiceCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceCreateRequest.attributeTypeMap;
    }
}
exports.IncidentServiceCreateRequest = IncidentServiceCreateRequest;
/**
 * @ignore
 */
IncidentServiceCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentServiceCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentServiceCreateRequest.js.map