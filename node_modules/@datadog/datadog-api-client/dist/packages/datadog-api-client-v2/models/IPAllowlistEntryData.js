"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistEntryData = void 0;
/**
 * Data of the IP allowlist entry object.
 */
class IPAllowlistEntryData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistEntryData.attributeTypeMap;
    }
}
exports.IPAllowlistEntryData = IPAllowlistEntryData;
/**
 * @ignore
 */
IPAllowlistEntryData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IPAllowlistEntryAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "IPAllowlistEntryType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistEntryData.js.map