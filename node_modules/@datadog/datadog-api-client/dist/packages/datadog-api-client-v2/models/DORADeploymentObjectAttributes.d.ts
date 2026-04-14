/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAGitInfo } from "./DORAGitInfo";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The attributes of the deployment event.
 */
export declare class DORADeploymentObjectAttributes {
    /**
     * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
     */
    "customTags"?: Array<string>;
    /**
     * Environment name to where the service was deployed.
     */
    "env"?: string;
    /**
     * Unix timestamp when the deployment finished.
     */
    "finishedAt": number;
    /**
     * Git info for DORA Metrics events.
     */
    "git"?: DORAGitInfo;
    /**
     * Service name.
     */
    "service": string;
    /**
     * Unix timestamp when the deployment started.
     */
    "startedAt": number;
    /**
     * Name of the team owning the deployed service.
     */
    "team"?: string;
    /**
     * Version to correlate with APM Deployment Tracking.
     */
    "version"?: string;
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
