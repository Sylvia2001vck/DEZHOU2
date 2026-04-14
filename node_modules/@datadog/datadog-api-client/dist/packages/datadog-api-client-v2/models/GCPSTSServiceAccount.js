"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccount = void 0;
/**
 * Info on your service account.
 */
class GCPSTSServiceAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccount.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccount = GCPSTSServiceAccount;
/**
 * @ignore
 */
GCPSTSServiceAccount.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPSTSServiceAccountAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "GCPServiceAccountMeta",
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
//# sourceMappingURL=GCPSTSServiceAccount.js.map