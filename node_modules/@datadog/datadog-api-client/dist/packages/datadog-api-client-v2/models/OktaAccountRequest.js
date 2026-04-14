"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountRequest = void 0;
/**
 * Request object for an Okta account.
 */
class OktaAccountRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountRequest.attributeTypeMap;
    }
}
exports.OktaAccountRequest = OktaAccountRequest;
/**
 * @ignore
 */
OktaAccountRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OktaAccount",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountRequest.js.map