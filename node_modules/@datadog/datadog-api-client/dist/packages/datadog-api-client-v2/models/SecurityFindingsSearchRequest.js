"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsSearchRequest = void 0;
/**
 * The request body for searching security findings.
 */
class SecurityFindingsSearchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsSearchRequest.attributeTypeMap;
    }
}
exports.SecurityFindingsSearchRequest = SecurityFindingsSearchRequest;
/**
 * @ignore
 */
SecurityFindingsSearchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityFindingsSearchRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsSearchRequest.js.map