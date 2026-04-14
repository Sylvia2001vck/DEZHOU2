"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentAttributes = void 0;
/**
 * Attributes of a Datadog Agent in the list view.
 */
class FleetAgentAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentAttributes.attributeTypeMap;
    }
}
exports.FleetAgentAttributes = FleetAgentAttributes;
/**
 * @ignore
 */
FleetAgentAttributes.attributeTypeMap = {
    agentVersion: {
        baseName: "agent_version",
        type: "string",
    },
    apiKeyName: {
        baseName: "api_key_name",
        type: "string",
    },
    apiKeyUuid: {
        baseName: "api_key_uuid",
        type: "string",
    },
    cloudProvider: {
        baseName: "cloud_provider",
        type: "string",
    },
    clusterName: {
        baseName: "cluster_name",
        type: "string",
    },
    datadogAgentKey: {
        baseName: "datadog_agent_key",
        type: "string",
    },
    enabledProducts: {
        baseName: "enabled_products",
        type: "Array<string>",
    },
    envs: {
        baseName: "envs",
        type: "Array<string>",
    },
    firstSeenAt: {
        baseName: "first_seen_at",
        type: "number",
        format: "int64",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    ipAddresses: {
        baseName: "ip_addresses",
        type: "Array<string>",
    },
    isSingleStepInstrumentationEnabled: {
        baseName: "is_single_step_instrumentation_enabled",
        type: "boolean",
    },
    lastRestartAt: {
        baseName: "last_restart_at",
        type: "number",
        format: "int64",
    },
    os: {
        baseName: "os",
        type: "string",
    },
    otelCollectorVersion: {
        baseName: "otel_collector_version",
        type: "string",
    },
    otelCollectorVersions: {
        baseName: "otel_collector_versions",
        type: "Array<string>",
    },
    podName: {
        baseName: "pod_name",
        type: "string",
    },
    remoteAgentManagement: {
        baseName: "remote_agent_management",
        type: "string",
    },
    remoteConfigStatus: {
        baseName: "remote_config_status",
        type: "string",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
    },
    tags: {
        baseName: "tags",
        type: "Array<FleetAgentAttributesTagsItems>",
    },
    team: {
        baseName: "team",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentAttributes.js.map