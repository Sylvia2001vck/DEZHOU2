"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringContentPackStateAttributes = void 0;
/**
 * Attributes of a content pack state
 */
class SecurityMonitoringContentPackStateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringContentPackStateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringContentPackStateAttributes = SecurityMonitoringContentPackStateAttributes;
/**
 * @ignore
 */
SecurityMonitoringContentPackStateAttributes.attributeTypeMap = {
    cloudSiemIndexIncorrect: {
        baseName: "cloud_siem_index_incorrect",
        type: "boolean",
        required: true,
    },
    cpActivation: {
        baseName: "cp_activation",
        type: "SecurityMonitoringContentPackActivation",
        required: true,
    },
    filtersConfiguredForLogs: {
        baseName: "filters_configured_for_logs",
        type: "boolean",
        required: true,
    },
    integrationInstalledStatus: {
        baseName: "integration_installed_status",
        type: "SecurityMonitoringContentPackIntegrationStatus",
    },
    logsLastCollected: {
        baseName: "logs_last_collected",
        type: "SecurityMonitoringContentPackTimestampBucket",
        required: true,
    },
    logsSeenFromAnyIndex: {
        baseName: "logs_seen_from_any_index",
        type: "boolean",
        required: true,
    },
    state: {
        baseName: "state",
        type: "SecurityMonitoringContentPackStatus",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringContentPackStateAttributes.js.map