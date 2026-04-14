"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountResponse = void 0;
/**
 * Response object for an Okta account.
 */
class OktaAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountResponse.attributeTypeMap;
    }
}
exports.OktaAccountResponse = OktaAccountResponse;
/**
 * @ignore
 */
OktaAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OktaAccount",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountResponse.js.map