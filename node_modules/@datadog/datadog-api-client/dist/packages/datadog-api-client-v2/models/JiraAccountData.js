"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraAccountData = void 0;
/**
 * Data object for a Jira account
 */
class JiraAccountData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraAccountData.attributeTypeMap;
    }
}
exports.JiraAccountData = JiraAccountData;
/**
 * @ignore
 */
JiraAccountData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraAccountAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "JiraAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraAccountData.js.map