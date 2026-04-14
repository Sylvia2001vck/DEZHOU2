"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainAllowlistResponseData = void 0;
/**
 * The email domain allowlist response for an org.
 */
class DomainAllowlistResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DomainAllowlistResponseData.attributeTypeMap;
    }
}
exports.DomainAllowlistResponseData = DomainAllowlistResponseData;
/**
 * @ignore
 */
DomainAllowlistResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DomainAllowlistResponseDataAttributes",
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
//# sourceMappingURL=DomainAllowlistResponseData.js.map