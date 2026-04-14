"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeCreateRequest = void 0;
/**
 * Create request for an incident type.
 */
class IncidentTypeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeCreateRequest.attributeTypeMap;
    }
}
exports.IncidentTypeCreateRequest = IncidentTypeCreateRequest;
/**
 * @ignore
 */
IncidentTypeCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTypeCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeCreateRequest.js.map