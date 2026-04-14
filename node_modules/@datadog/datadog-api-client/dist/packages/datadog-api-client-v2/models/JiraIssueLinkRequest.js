"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueLinkRequest = void 0;
/**
 * Jira issue link request
 */
class JiraIssueLinkRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueLinkRequest.attributeTypeMap;
    }
}
exports.JiraIssueLinkRequest = JiraIssueLinkRequest;
/**
 * @ignore
 */
JiraIssueLinkRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraIssueLinkData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueLinkRequest.js.map