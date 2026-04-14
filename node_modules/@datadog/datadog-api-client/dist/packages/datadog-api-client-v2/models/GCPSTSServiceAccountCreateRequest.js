"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountCreateRequest = void 0;
/**
 * Data on your newly generated service account.
 */
class GCPSTSServiceAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountCreateRequest.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountCreateRequest = GCPSTSServiceAccountCreateRequest;
/**
 * @ignore
 */
GCPSTSServiceAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPSTSServiceAccountData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountCreateRequest.js.map