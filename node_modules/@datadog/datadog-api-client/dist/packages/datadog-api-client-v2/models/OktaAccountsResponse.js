"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountsResponse = void 0;
/**
 * The expected response schema when getting Okta accounts.
 */
class OktaAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountsResponse.attributeTypeMap;
    }
}
exports.OktaAccountsResponse = OktaAccountsResponse;
/**
 * @ignore
 */
OktaAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OktaAccountResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountsResponse.js.map