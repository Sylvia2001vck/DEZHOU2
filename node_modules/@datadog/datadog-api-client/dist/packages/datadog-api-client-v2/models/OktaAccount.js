"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccount = void 0;
/**
 * Schema for an Okta account.
 */
class OktaAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccount.attributeTypeMap;
    }
}
exports.OktaAccount = OktaAccount;
/**
 * @ignore
 */
OktaAccount.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OktaAccountAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "OktaAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccount.js.map