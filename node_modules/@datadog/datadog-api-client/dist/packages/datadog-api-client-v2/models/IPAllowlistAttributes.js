"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistAttributes = void 0;
/**
 * Attributes of the IP allowlist.
 */
class IPAllowlistAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistAttributes.attributeTypeMap;
    }
}
exports.IPAllowlistAttributes = IPAllowlistAttributes;
/**
 * @ignore
 */
IPAllowlistAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    entries: {
        baseName: "entries",
        type: "Array<IPAllowlistEntry>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistAttributes.js.map