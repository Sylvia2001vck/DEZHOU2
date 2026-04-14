"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainAllowlistResponse = void 0;
/**
 * Response containing information about the email domain allowlist.
 */
class DomainAllowlistResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DomainAllowlistResponse.attributeTypeMap;
    }
}
exports.DomainAllowlistResponse = DomainAllowlistResponse;
/**
 * @ignore
 */
DomainAllowlistResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DomainAllowlistResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DomainAllowlistResponse.js.map