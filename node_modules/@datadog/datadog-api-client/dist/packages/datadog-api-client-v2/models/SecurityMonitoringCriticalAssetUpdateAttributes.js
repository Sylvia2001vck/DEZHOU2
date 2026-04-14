"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetUpdateAttributes = void 0;
/**
 * The critical asset properties to be updated.
 */
class SecurityMonitoringCriticalAssetUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetUpdateAttributes = SecurityMonitoringCriticalAssetUpdateAttributes;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=SecurityMonitoringCriticalAssetUpdateAttributes.js.map