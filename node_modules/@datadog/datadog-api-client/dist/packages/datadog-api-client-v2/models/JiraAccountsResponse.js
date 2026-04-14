"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraAccountsResponse = void 0;
/**
 * Response containing Jira accounts
 */
class JiraAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraAccountsResponse.attributeTypeMap;
    }
}
exports.JiraAccountsResponse = JiraAccountsResponse;
/**
 * @ignore
 */
JiraAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<JiraAccountData>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "JiraAccountsMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraAccountsResponse.js.map