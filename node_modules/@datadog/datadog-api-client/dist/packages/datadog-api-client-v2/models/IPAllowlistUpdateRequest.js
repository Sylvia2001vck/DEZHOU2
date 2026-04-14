"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistUpdateRequest = void 0;
/**
 * Update the IP allowlist.
 */
class IPAllowlistUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistUpdateRequest.attributeTypeMap;
    }
}
exports.IPAllowlistUpdateRequest = IPAllowlistUpdateRequest;
/**
 * @ignore
 */
IPAllowlistUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IPAllowlistData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistUpdateRequest.js.map