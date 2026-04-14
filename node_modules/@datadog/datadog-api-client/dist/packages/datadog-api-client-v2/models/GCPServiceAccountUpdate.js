"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPServiceAccountUpdate = void 0;
/**
 * The definition of the `GCPServiceAccount` object.
 */
class GCPServiceAccountUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPServiceAccountUpdate.attributeTypeMap;
    }
}
exports.GCPServiceAccountUpdate = GCPServiceAccountUpdate;
/**
 * @ignore
 */
GCPServiceAccountUpdate.attributeTypeMap = {
    privateKey: {
        baseName: "private_key",
        type: "string",
    },
    serviceAccountEmail: {
        baseName: "service_account_email",
        type: "string",
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
//# sourceMappingURL=GCPServiceAccountUpdate.js.map