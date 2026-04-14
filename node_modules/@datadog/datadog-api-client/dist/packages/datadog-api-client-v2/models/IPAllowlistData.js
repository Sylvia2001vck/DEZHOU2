"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistData = void 0;
/**
 * IP allowlist data.
 */
class IPAllowlistData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistData.attributeTypeMap;
    }
}
exports.IPAllowlistData = IPAllowlistData;
/**
 * @ignore
 */
IPAllowlistData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IPAllowlistAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "IPAllowlistType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistData.js.map