"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainAllowlistRequest = void 0;
/**
 * Request containing the desired email domain allowlist configuration.
 */
class DomainAllowlistRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DomainAllowlistRequest.attributeTypeMap;
    }
}
exports.DomainAllowlistRequest = DomainAllowlistRequest;
/**
 * @ignore
 */
DomainAllowlistRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DomainAllowlist",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DomainAllowlistRequest.js.map