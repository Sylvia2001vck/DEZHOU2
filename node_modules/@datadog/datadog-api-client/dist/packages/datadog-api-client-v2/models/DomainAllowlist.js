"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainAllowlist = void 0;
/**
 * The email domain allowlist for an org.
 */
class DomainAllowlist {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DomainAllowlist.attributeTypeMap;
    }
}
exports.DomainAllowlist = DomainAllowlist;
/**
 * @ignore
 */
DomainAllowlist.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DomainAllowlistAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DomainAllowlistType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DomainAllowlist.js.map