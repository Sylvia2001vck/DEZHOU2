"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalTriageUpdateData = void 0;
/**
 * Data containing the updated triage attributes of the signal.
 */
class SecurityMonitoringSignalTriageUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalTriageUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalTriageUpdateData = SecurityMonitoringSignalTriageUpdateData;
/**
 * @ignore
 */
SecurityMonitoringSignalTriageUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSignalTriageAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSignalMetadataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalTriageUpdateData.js.map