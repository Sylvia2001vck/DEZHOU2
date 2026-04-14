/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Detailed information about a Datadog Agent.
 */
export declare class FleetAgentInfoDetails {
    /**
     * The Datadog Agent version.
     */
    "agentVersion"?: string;
    /**
     * The API key name (if available and not redacted).
     */
    "apiKeyName"?: string;
    /**
     * The API key UUID.
     */
    "apiKeyUuid"?: string;
    /**
     * The cloud provider where the agent is running.
     */
    "cloudProvider"?: string;
    /**
     * Kubernetes cluster name (if applicable).
     */
    "clusterName"?: string;
    /**
     * The unique agent key identifier.
     */
    "datadogAgentKey"?: string;
    /**
     * Datadog products enabled on the agent.
     */
    "enabledProducts"?: Array<string>;
    /**
     * Environments the agent is reporting from.
     */
    "env"?: Array<string>;
    /**
     * Timestamp when the agent was first seen.
     */
    "firstSeenAt"?: number;
    /**
     * The hostname of the agent.
     */
    "hostname"?: string;
    /**
     * Alternative hostname list for the agent.
     */
    "hostnameAliases"?: Array<string>;
    /**
     * The version of the installer used.
     */
    "installMethodInstallerVersion"?: string;
    /**
     * The tool used to install the agent.
     */
    "installMethodTool"?: string;
    /**
     * IP addresses of the agent.
     */
    "ipAddresses"?: Array<string>;
    /**
     * Whether single-step instrumentation is enabled.
     */
    "isSingleStepInstrumentationEnabled"?: boolean;
    /**
     * Timestamp of the last agent restart.
     */
    "lastRestartAt"?: number;
    /**
     * The operating system.
     */
    "os"?: string;
    /**
     * The operating system version.
     */
    "osVersion"?: string;
    /**
     * OpenTelemetry collector version (if applicable).
     */
    "otelCollectorVersion"?: string;
    /**
     * List of OpenTelemetry collector versions (if applicable).
     */
    "otelCollectorVersions"?: Array<string>;
    /**
     * OpenTelemetry collectors associated with the agent (if applicable).
     */
    "otelCollectors"?: Array<{
        [key: string]: any;
    }>;
    /**
     * Kubernetes pod name (if applicable).
     */
    "podName"?: string;
    /**
     * The Python version used by the agent.
     */
    "pythonVersion"?: string;
    /**
     * Regions where the agent is running.
     */
    "region"?: Array<string>;
    /**
     * Remote agent management status.
     */
    "remoteAgentManagement"?: string;
    /**
     * Remote configuration status.
     */
    "remoteConfigStatus"?: string;
    /**
     * Services running on the agent.
     */
    "services"?: Array<string>;
    /**
     * Tags associated with the agent.
     */
    "tags"?: Array<string>;
    /**
     * Team associated with the agent.
     */
    "team"?: string;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
