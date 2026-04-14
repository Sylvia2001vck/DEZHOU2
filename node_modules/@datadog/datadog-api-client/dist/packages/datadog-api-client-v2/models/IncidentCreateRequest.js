"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentCreateRequest = void 0;
/**
 * Create request for an incident.
 */
class IncidentCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentCreateRequest.attributeTypeMap;
    }
}
exports.IncidentCreateRequest = IncidentCreateRequest;
/**
 * @ignore
 */
IncidentCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentCreateRequest.js.map