"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypePatchRequest = void 0;
/**
 * Patch request for an incident type.
 */
class IncidentTypePatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypePatchRequest.attributeTypeMap;
    }
}
exports.IncidentTypePatchRequest = IncidentTypePatchRequest;
/**
 * @ignore
 */
IncidentTypePatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTypePatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypePatchRequest.js.map