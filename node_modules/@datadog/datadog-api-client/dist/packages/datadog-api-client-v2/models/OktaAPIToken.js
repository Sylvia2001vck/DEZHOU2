"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAPIToken = void 0;
/**
 * The definition of the `OktaAPIToken` object.
 */
class OktaAPIToken {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAPIToken.attributeTypeMap;
    }
}
exports.OktaAPIToken = OktaAPIToken;
/**
 * @ignore
 */
OktaAPIToken.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    domain: {
        baseName: "domain",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OktaAPITokenType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAPIToken.js.map