"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraAccountRelationship = void 0;
/**
 * Relationship to a Jira account
 */
class JiraAccountRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraAccountRelationship.attributeTypeMap;
    }
}
exports.JiraAccountRelationship = JiraAccountRelationship;
/**
 * @ignore
 */
JiraAccountRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraAccountData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraAccountRelationship.js.map