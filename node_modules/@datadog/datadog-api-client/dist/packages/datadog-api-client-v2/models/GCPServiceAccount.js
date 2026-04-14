"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPServiceAccount = void 0;
/**
 * The definition of the `GCPServiceAccount` object.
 */
class GCPServiceAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPServiceAccount.attributeTypeMap;
    }
}
exports.GCPServiceAccount = GCPServiceAccount;
/**
 * @ignore
 */
GCPServiceAccount.attributeTypeMap = {
    privateKey: {
        baseName: "private_key",
        type: "string",
        required: true,
    },
    serviceAccountEmail: {
        baseName: "service_account_email",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GCPServiceAccountCredentialType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPServiceAccount.js.map