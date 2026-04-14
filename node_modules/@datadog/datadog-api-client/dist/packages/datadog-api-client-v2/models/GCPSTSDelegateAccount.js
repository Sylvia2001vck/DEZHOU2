"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSDelegateAccount = void 0;
/**
 * Datadog principal service account info.
 */
class GCPSTSDelegateAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSDelegateAccount.attributeTypeMap;
    }
}
exports.GCPSTSDelegateAccount = GCPSTSDelegateAccount;
/**
 * @ignore
 */
GCPSTSDelegateAccount.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPSTSDelegateAccountAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GCPSTSDelegateAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSDelegateAccount.js.map