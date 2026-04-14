/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPUsageCostConfigAttributes } from "./GCPUsageCostConfigAttributes";
import { GCPUsageCostConfigType } from "./GCPUsageCostConfigType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Google Cloud Usage Cost config.
 */
export declare class GCPUsageCostConfig {
    /**
     * Attributes for a Google Cloud Usage Cost config.
     */
    "attributes": GCPUsageCostConfigAttributes;
    /**
     * The ID of the Google Cloud Usage Cost config.
     */
    "id"?: string;
    /**
     * Type of Google Cloud Usage Cost config.
     */
    "type": GCPUsageCostConfigType;
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
