"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountData = void 0;
/**
 * Additional metadata on your generated service account.
 */
class GCPSTSServiceAccountData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountData.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountData = GCPSTSServiceAccountData;
/**
 * @ignore
 */
GCPSTSServiceAccountData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPSTSServiceAccountAttributes",
    },
    type: {
        baseName: "type",
        type: "GCPServiceAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountData.js.map