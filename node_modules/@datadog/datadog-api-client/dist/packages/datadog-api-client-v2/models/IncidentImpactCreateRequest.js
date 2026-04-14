"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactCreateRequest = void 0;
/**
 * Create request for an incident impact.
 */
class IncidentImpactCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactCreateRequest.attributeTypeMap;
    }
}
exports.IncidentImpactCreateRequest = IncidentImpactCreateRequest;
/**
 * @ignore
 */
IncidentImpactCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentImpactCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImpactCreateRequest.js.map