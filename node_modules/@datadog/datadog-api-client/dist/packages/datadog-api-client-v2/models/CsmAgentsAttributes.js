"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmAgentsAttributes = void 0;
/**
 * A CSM Agent returned by the API.
 */
class CsmAgentsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmAgentsAttributes.attributeTypeMap;
    }
}
exports.CsmAgentsAttributes = CsmAgentsAttributes;
/**
 * @ignore
 */
CsmAgentsAttributes.attributeTypeMap = {
    agentVersion: {
        baseName: "agent_version",
        type: "string",
    },
    awsFargate: {
        baseName: "aws_fargate",
        type: "string",
    },
    clusterName: {
        baseName: "cluster_name",
        type: "Array<string>",
    },
    datadogAgent: {
        baseName: "datadog_agent",
        type: "string",
    },
    ecsFargateTaskArn: {
        baseName: "ecs_fargate_task_arn",
        type: "string",
    },
    envs: {
        baseName: "envs",
        type: "Array<string>",
    },
    hostId: {
        baseName: "host_id",
        type: "number",
        format: "int64",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    installMethodInstallerVersion: {
        baseName: "install_method_installer_version",
        type: "string",
    },
    installMethodTool: {
        baseName: "install_method_tool",
        type: "string",
    },
    isCsmVmContainersEnabled: {
        baseName: "is_csm_vm_containers_enabled",
        type: "boolean",
    },
    isCsmVmHostsEnabled: {
        baseName: "is_csm_vm_hosts_enabled",
        type: "boolean",
    },
    isCspmEnabled: {
        baseName: "is_cspm_enabled",
        type: "boolean",
    },
    isCwsEnabled: {
        baseName: "is_cws_enabled",
        type: "boolean",
    },
    isCwsRemoteConfigurationEnabled: {
        baseName: "is_cws_remote_configuration_enabled",
        type: "boolean",
    },
    isRemoteConfigurationEnabled: {
        baseName: "is_remote_configuration_enabled",
        type: "boolean",
    },
    os: {
        baseName: "os",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmAgentsAttributes.js.map