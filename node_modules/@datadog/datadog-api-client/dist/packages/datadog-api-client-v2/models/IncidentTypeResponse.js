"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeResponse = void 0;
/**
 * Incident type response data.
 */
class IncidentTypeResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeResponse.attributeTypeMap;
    }
}
exports.IncidentTypeResponse = IncidentTypeResponse;
/**
 * @ignore
 */
IncidentTypeResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTypeObject",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeResponse.js.map