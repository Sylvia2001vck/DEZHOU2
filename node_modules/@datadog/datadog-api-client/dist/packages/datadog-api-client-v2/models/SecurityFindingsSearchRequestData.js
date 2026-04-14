"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsSearchRequestData = void 0;
/**
 * Request data for searching security findings.
 */
class SecurityFindingsSearchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsSearchRequestData.attributeTypeMap;
    }
}
exports.SecurityFindingsSearchRequestData = SecurityFindingsSearchRequestData;
/**
 * @ignore
 */
SecurityFindingsSearchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityFindingsSearchRequestDataAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsSearchRequestData.js.map