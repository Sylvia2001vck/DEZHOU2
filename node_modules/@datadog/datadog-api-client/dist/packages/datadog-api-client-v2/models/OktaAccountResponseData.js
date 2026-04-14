"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountResponseData = void 0;
/**
 * Data object of an Okta account
 */
class OktaAccountResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountResponseData.attributeTypeMap;
    }
}
exports.OktaAccountResponseData = OktaAccountResponseData;
/**
 * @ignore
 */
OktaAccountResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OktaAccountAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=OktaAccountResponseData.js.map