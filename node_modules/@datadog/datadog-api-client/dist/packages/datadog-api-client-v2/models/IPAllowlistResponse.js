"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistResponse = void 0;
/**
 * Response containing information about the IP allowlist.
 */
class IPAllowlistResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistResponse.attributeTypeMap;
    }
}
exports.IPAllowlistResponse = IPAllowlistResponse;
/**
 * @ignore
 */
IPAllowlistResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IPAllowlistData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistResponse.js.map