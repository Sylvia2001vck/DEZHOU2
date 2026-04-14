"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoPatchRequest = void 0;
/**
 * Patch request for an incident todo.
 */
class IncidentTodoPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoPatchRequest.attributeTypeMap;
    }
}
exports.IncidentTodoPatchRequest = IncidentTodoPatchRequest;
/**
 * @ignore
 */
IncidentTodoPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTodoPatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoPatchRequest.js.map