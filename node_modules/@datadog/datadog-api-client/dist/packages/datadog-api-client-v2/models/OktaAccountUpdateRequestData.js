"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountUpdateRequestData = void 0;
/**
 * Data object for updating an Okta account.
 */
class OktaAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.OktaAccountUpdateRequestData = OktaAccountUpdateRequestData;
/**
 * @ignore
 */
OktaAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OktaAccountUpdateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "OktaAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountUpdateRequestData.js.map