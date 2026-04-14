"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleBulkExportPayload = void 0;
/**
 * Payload for bulk exporting security monitoring rules.
 */
class SecurityMonitoringRuleBulkExportPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleBulkExportPayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleBulkExportPayload = SecurityMonitoringRuleBulkExportPayload;
/**
 * @ignore
 */
SecurityMonitoringRuleBulkExportPayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringRuleBulkExportData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleBulkExportPayload.js.map