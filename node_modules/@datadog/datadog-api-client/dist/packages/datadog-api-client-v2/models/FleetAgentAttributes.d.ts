/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentAttributesTagsItems } from "./FleetAgentAttributesTagsItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of a Datadog Agent in the list view.
 */
export declare class FleetAgentAttributes {
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
    "envs"?: Array<string>;
    /**
     * Timestamp when the agent was first seen.
     */
    "firstSeenAt"?: number;
    /**
     * The hostname of the agent.
     */
    "hostname"?: string;
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
     * OpenTelemetry collector version (if applicable).
     */
    "otelCollectorVersion"?: string;
    /**
     * List of OpenTelemetry collector versions (if applicable).
     */
    "otelCollectorVersions"?: Array<string>;
    /**
     * Kubernetes pod name (if applicable).
     */
    "podName"?: string;
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
    "tags"?: Array<FleetAgentAttributesTagsItems>;
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
