/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TenancyConfigDataAttributesLogsConfig } from "./TenancyConfigDataAttributesLogsConfig";
import { TenancyConfigDataAttributesMetricsConfig } from "./TenancyConfigDataAttributesMetricsConfig";
import { TenancyConfigDataAttributesRegionsConfig } from "./TenancyConfigDataAttributesRegionsConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class TenancyConfigDataAttributes {
    "billingPlanId"?: number;
    "configVersion"?: number;
    "costCollectionEnabled"?: boolean;
    "ddCompartmentId"?: string;
    "ddStackId"?: string;
    "homeRegion"?: string;
    "logsConfig"?: TenancyConfigDataAttributesLogsConfig;
    "metricsConfig"?: TenancyConfigDataAttributesMetricsConfig;
    "parentTenancyName"?: string;
    "regionsConfig"?: TenancyConfigDataAttributesRegionsConfig;
    "resourceCollectionEnabled"?: boolean;
    "tenancyName"?: string;
    "userOcid"?: string;
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
