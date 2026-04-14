"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountUpdateRequest = void 0;
/**
 * Payload schema when updating an Okta account.
 */
class OktaAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountUpdateRequest.attributeTypeMap;
    }
}
exports.OktaAccountUpdateRequest = OktaAccountUpdateRequest;
/**
 * @ignore
 */
OktaAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OktaAccountUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountUpdateRequest.js.map