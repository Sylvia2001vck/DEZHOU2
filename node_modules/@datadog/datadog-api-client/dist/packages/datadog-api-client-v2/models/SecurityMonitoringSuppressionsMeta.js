"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionsMeta = void 0;
/**
 * Metadata for the suppression list response.
 */
class SecurityMonitoringSuppressionsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionsMeta.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionsMeta = SecurityMonitoringSuppressionsMeta;
/**
 * @ignore
 */
SecurityMonitoringSuppressionsMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "SecurityMonitoringSuppressionsPageMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionsMeta.js.map