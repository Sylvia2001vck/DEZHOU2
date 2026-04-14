"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetAttributes = void 0;
/**
 * The attributes of the critical asset.
 */
class SecurityMonitoringCriticalAssetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetAttributes = SecurityMonitoringCriticalAssetAttributes;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetAttributes.attributeTypeMap = {
    creationAuthorId: {
        baseName: "creation_author_id",
        type: "number",
        format: "int64",
    },
    creationDate: {
        baseName: "creation_date",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "SecurityMonitoringUser",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    ruleQuery: {
        baseName: "rule_query",
        type: "string",
    },
    severity: {
        baseName: "severity",
        type: "SecurityMonitoringCriticalAssetSeverity",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    updateAuthorId: {
        baseName: "update_author_id",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=SecurityMonitoringCriticalAssetAttributes.js.map