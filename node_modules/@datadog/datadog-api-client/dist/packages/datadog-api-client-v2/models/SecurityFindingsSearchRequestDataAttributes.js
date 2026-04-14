"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsSearchRequestDataAttributes = void 0;
/**
 * Request attributes for searching security findings.
 */
class SecurityFindingsSearchRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsSearchRequestDataAttributes.attributeTypeMap;
    }
}
exports.SecurityFindingsSearchRequestDataAttributes = SecurityFindingsSearchRequestDataAttributes;
/**
 * @ignore
 */
SecurityFindingsSearchRequestDataAttributes.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "string",
    },
    page: {
        baseName: "page",
        type: "SecurityFindingsSearchRequestPage",
    },
    sort: {
        baseName: "sort",
        type: "SecurityFindingsSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsSearchRequestDataAttributes.js.map