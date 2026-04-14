"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetCreateAttributes = void 0;
/**
 * Object containing the attributes of the critical asset to be created.
 */
class SecurityMonitoringCriticalAssetCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetCreateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetCreateAttributes = SecurityMonitoringCriticalAssetCreateAttributes;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetCreateAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    ruleQuery: {
        baseName: "rule_query",
        type: "string",
        required: true,
    },
    severity: {
        baseName: "severity",
        type: "SecurityMonitoringCriticalAssetSeverity",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetCreateAttributes.js.map