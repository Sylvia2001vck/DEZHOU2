"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountUpdateRequest = void 0;
/**
 * Service account info.
 */
class GCPSTSServiceAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountUpdateRequest.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountUpdateRequest = GCPSTSServiceAccountUpdateRequest;
/**
 * @ignore
 */
GCPSTSServiceAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPSTSServiceAccountUpdateRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountUpdateRequest.js.map