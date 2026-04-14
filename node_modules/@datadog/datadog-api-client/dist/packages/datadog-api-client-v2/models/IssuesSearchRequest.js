"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchRequest = void 0;
/**
 * Search issues request payload.
 */
class IssuesSearchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchRequest.attributeTypeMap;
    }
}
exports.IssuesSearchRequest = IssuesSearchRequest;
/**
 * @ignore
 */
IssuesSearchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssuesSearchRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchRequest.js.map