/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentHost } from "./FleetDeploymentHost";
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";
import { FleetDeploymentPackage } from "./FleetDeploymentPackage";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of a deployment in the response.
 */
export declare class FleetDeploymentAttributes {
    /**
     * Ordered list of configuration file operations to perform on the target hosts.
     */
    "configOperations"?: Array<FleetDeploymentOperation>;
    /**
     * Estimated completion time of the deployment as a Unix timestamp (seconds since epoch).
     */
    "estimatedEndTimeUnix"?: number;
    /**
     * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
     */
    "filterQuery"?: string;
    /**
     * Current high-level status of the deployment (for example, "pending", "running",
     * "completed", "failed").
     */
    "highLevelStatus"?: string;
    /**
     * Paginated list of hosts in this deployment with their individual statuses. Only included
     * when fetching a single deployment by ID. Use the `limit` and `page` query parameters to
     * navigate through pages. Pagination metadata is included in the response `meta.hosts` field.
     */
    "hosts"?: Array<FleetDeploymentHost>;
    /**
     * List of packages to deploy to target hosts. Present only for package upgrade deployments.
     */
    "packages"?: Array<FleetDeploymentPackage>;
    /**
     * Total number of hosts targeted by this deployment.
     */
    "totalHosts"?: number;
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
