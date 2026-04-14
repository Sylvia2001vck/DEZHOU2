"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistEntry = void 0;
/**
 * IP allowlist entry object.
 */
class IPAllowlistEntry {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistEntry.attributeTypeMap;
    }
}
exports.IPAllowlistEntry = IPAllowlistEntry;
/**
 * @ignore
 */
IPAllowlistEntry.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IPAllowlistEntryData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistEntry.js.map