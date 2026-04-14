"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountAttributes = void 0;
/**
 * Attributes associated with your service account.
 */
class GCPSTSServiceAccountAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountAttributes.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountAttributes = GCPSTSServiceAccountAttributes;
/**
 * @ignore
 */
GCPSTSServiceAccountAttributes.attributeTypeMap = {
    accountTags: {
        baseName: "account_tags",
        type: "Array<string>",
    },
    automute: {
        baseName: "automute",
        type: "boolean",
    },
    clientEmail: {
        baseName: "client_email",
        type: "string",
    },
    cloudRunRevisionFilters: {
        baseName: "cloud_run_revision_filters",
        type: "Array<string>",
    },
    hostFilters: {
        baseName: "host_filters",
        type: "Array<string>",
    },
    isCspmEnabled: {
        baseName: "is_cspm_enabled",
        type: "boolean",
    },
    isGlobalLocationEnabled: {
        baseName: "is_global_location_enabled",
        type: "boolean",
    },
    isPerProjectQuotaEnabled: {
        baseName: "is_per_project_quota_enabled",
        type: "boolean",
    },
    isResourceChangeCollectionEnabled: {
        baseName: "is_resource_change_collection_enabled",
        type: "boolean",
    },
    isSecurityCommandCenterEnabled: {
        baseName: "is_security_command_center_enabled",
        type: "boolean",
    },
    metricNamespaceConfigs: {
        baseName: "metric_namespace_configs",
        type: "Array<GCPMetricNamespaceConfig>",
    },
    monitoredResourceConfigs: {
        baseName: "monitored_resource_configs",
        type: "Array<GCPMonitoredResourceConfig>",
    },
    regionFilterConfigs: {
        baseName: "region_filter_configs",
        type: "Array<string>",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountAttributes.js.map