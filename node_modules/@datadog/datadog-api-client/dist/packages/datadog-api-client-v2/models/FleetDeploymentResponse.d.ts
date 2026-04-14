/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentResponseMeta } from "./FleetDeploymentResponseMeta";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response containing a single deployment.
 */
export declare class FleetDeploymentResponse {
    /**
     * A deployment that defines automated configuration changes for a fleet of hosts.
     */
    "data"?: FleetDeployment;
    /**
     * Metadata for a single deployment response, including pagination information for hosts.
     */
    "meta"?: FleetDeploymentResponseMeta;
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
