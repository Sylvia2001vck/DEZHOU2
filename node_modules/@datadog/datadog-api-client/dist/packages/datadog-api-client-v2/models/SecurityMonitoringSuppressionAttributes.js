"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionAttributes = void 0;
/**
 * The attributes of the suppression rule.
 */
class SecurityMonitoringSuppressionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionAttributes = SecurityMonitoringSuppressionAttributes;
/**
 * @ignore
 */
SecurityMonitoringSuppressionAttributes.attributeTypeMap = {
    creationDate: {
        baseName: "creation_date",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "SecurityMonitoringUser",
    },
    dataExclusionQuery: {
        baseName: "data_exclusion_query",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    editable: {
        baseName: "editable",
        type: "boolean",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    expirationDate: {
        baseName: "expiration_date",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    ruleQuery: {
        baseName: "rule_query",
        type: "string",
    },
    startDate: {
        baseName: "start_date",
        type: "number",
        format: "int64",
    },
    suppressionQuery: {
        baseName: "suppression_query",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    updateDate: {
        baseName: "update_date",
        type: "number",
        format: "int64",
    },
    updater: {
        baseName: "updater",
        type: "SecurityMonitoringUser",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionAttributes.js.map