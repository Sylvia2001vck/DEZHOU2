"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUpdateRequest = void 0;
/**
 * Update request for an incident.
 */
class IncidentUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUpdateRequest.attributeTypeMap;
    }
}
exports.IncidentUpdateRequest = IncidentUpdateRequest;
/**
 * @ignore
 */
IncidentUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentUpdateRequest.js.map