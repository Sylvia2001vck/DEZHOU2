/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time.
 */
export declare class DORADeploymentPatchRemediation {
    /**
     * The ID of the remediation deployment. Required when the failed deployment must be linked to a remediation deployment.
     */
    "id"?: string;
    /**
     * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
     */
    "type"?: DORADeploymentPatchRemediationType;
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
