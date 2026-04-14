"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAPITokenUpdate = void 0;
/**
 * The definition of the `OktaAPIToken` object.
 */
class OktaAPITokenUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAPITokenUpdate.attributeTypeMap;
    }
}
exports.OktaAPITokenUpdate = OktaAPITokenUpdate;
/**
 * @ignore
 */
OktaAPITokenUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
    },
    domain: {
        baseName: "domain",
        type: "string",
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
//# sourceMappingURL=OktaAPITokenUpdate.js.map