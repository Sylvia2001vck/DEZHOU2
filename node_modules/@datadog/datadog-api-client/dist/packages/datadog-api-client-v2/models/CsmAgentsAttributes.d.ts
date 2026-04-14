/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A CSM Agent returned by the API.
 */
export declare class CsmAgentsAttributes {
    /**
     * Version of the Datadog Agent.
     */
    "agentVersion"?: string;
    /**
     * AWS Fargate details.
     */
    "awsFargate"?: string;
    /**
     * List of cluster names associated with the Agent.
     */
    "clusterName"?: Array<string>;
    /**
     * Unique identifier for the Datadog Agent.
     */
    "datadogAgent"?: string;
    /**
     * ARN of the ECS Fargate task.
     */
    "ecsFargateTaskArn"?: string;
    /**
     * List of environments associated with the Agent.
     */
    "envs"?: Array<string>;
    /**
     * ID of the host.
     */
    "hostId"?: number;
    /**
     * Name of the host.
     */
    "hostname"?: string;
    /**
     * Version of the installer used for installing the Datadog Agent.
     */
    "installMethodInstallerVersion"?: string;
    /**
     * Tool used for installing the Datadog Agent.
     */
    "installMethodTool"?: string;
    /**
     * Indicates if CSM VM Containers is enabled.
     */
    "isCsmVmContainersEnabled"?: boolean;
    /**
     * Indicates if CSM VM Hosts is enabled.
     */
    "isCsmVmHostsEnabled"?: boolean;
    /**
     * Indicates if CSPM is enabled.
     */
    "isCspmEnabled"?: boolean;
    /**
     * Indicates if CWS is enabled.
     */
    "isCwsEnabled"?: boolean;
    /**
     * Indicates if CWS Remote Configuration is enabled.
     */
    "isCwsRemoteConfigurationEnabled"?: boolean;
    /**
     * Indicates if Remote Configuration is enabled.
     */
    "isRemoteConfigurationEnabled"?: boolean;
    /**
     * Operating system of the host.
     */
    "os"?: string;
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
