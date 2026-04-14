"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleRequest = void 0;
class IncidentHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleRequest.attributeTypeMap;
    }
}
exports.IncidentHandleRequest = IncidentHandleRequest;
/**
 * @ignore
 */
IncidentHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentHandleDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleRequest.js.map