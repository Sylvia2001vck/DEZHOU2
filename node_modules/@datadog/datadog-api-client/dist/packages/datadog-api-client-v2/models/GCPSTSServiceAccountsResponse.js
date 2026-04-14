"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountsResponse = void 0;
/**
 * Object containing all your STS enabled accounts.
 */
class GCPSTSServiceAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountsResponse.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountsResponse = GCPSTSServiceAccountsResponse;
/**
 * @ignore
 */
GCPSTSServiceAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<GCPSTSServiceAccount>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountsResponse.js.map