"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleBulkExportData = void 0;
/**
 * Data for bulk exporting security monitoring rules.
 */
class SecurityMonitoringRuleBulkExportData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleBulkExportData.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleBulkExportData = SecurityMonitoringRuleBulkExportData;
/**
 * @ignore
 */
SecurityMonitoringRuleBulkExportData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringRuleBulkExportAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringRuleBulkExportDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleBulkExportData.js.map