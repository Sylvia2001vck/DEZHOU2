/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationServiceNowAutoCreation } from "./IntegrationServiceNowAutoCreation";
import { IntegrationServiceNowSyncConfig } from "./IntegrationServiceNowSyncConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * ServiceNow integration settings
 */
export declare class IntegrationServiceNow {
    /**
     * Assignment group
     */
    "assignmentGroup"?: string;
    "autoCreation"?: IntegrationServiceNowAutoCreation;
    /**
     * Whether ServiceNow integration is enabled
     */
    "enabled"?: boolean;
    /**
     * ServiceNow instance name
     */
    "instanceName"?: string;
    "syncConfig"?: IntegrationServiceNowSyncConfig;
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
