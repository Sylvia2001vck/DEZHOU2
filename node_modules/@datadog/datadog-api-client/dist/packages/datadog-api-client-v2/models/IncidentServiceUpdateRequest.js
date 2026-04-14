"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceUpdateRequest = void 0;
/**
 * Update request with an incident service payload.
 */
class IncidentServiceUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceUpdateRequest.attributeTypeMap;
    }
}
exports.IncidentServiceUpdateRequest = IncidentServiceUpdateRequest;
/**
 * @ignore
 */
IncidentServiceUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentServiceUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentServiceUpdateRequest.js.map