"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentInfoDetails = void 0;
/**
 * Detailed information about a Datadog Agent.
 */
class FleetAgentInfoDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentInfoDetails.attributeTypeMap;
    }
}
exports.FleetAgentInfoDetails = FleetAgentInfoDetails;
/**
 * @ignore
 */
FleetAgentInfoDetails.attributeTypeMap = {
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
    env: {
        baseName: "env",
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
    hostnameAliases: {
        baseName: "hostname_aliases",
        type: "Array<string>",
    },
    installMethodInstallerVersion: {
        baseName: "install_method_installer_version",
        type: "string",
    },
    installMethodTool: {
        baseName: "install_method_tool",
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
    osVersion: {
        baseName: "os_version",
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
    otelCollectors: {
        baseName: "otel_collectors",
        type: "Array<{ [key: string]: any; }>",
    },
    podName: {
        baseName: "pod_name",
        type: "string",
    },
    pythonVersion: {
        baseName: "python_version",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "Array<string>",
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
        type: "Array<string>",
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
//# sourceMappingURL=FleetAgentInfoDetails.js.map