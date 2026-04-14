/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Line item details from a Custom Costs file.
 */
export declare class CustomCostsFileLineItem {
    /**
     * Total cost in the cost file.
     */
    "billedCost"?: number;
    /**
     * Currency used in the Custom Costs file.
     */
    "billingCurrency"?: string;
    /**
     * Description for the line item cost.
     */
    "chargeDescription"?: string;
    /**
     * End date of the usage charge.
     */
    "chargePeriodEnd"?: string;
    /**
     * Start date of the usage charge.
     */
    "chargePeriodStart"?: string;
    /**
     * Name of the provider for the line item.
     */
    "providerName"?: string;
    /**
     * Additional tags for the line item.
     */
    "tags"?: {
        [key: string]: string;
    };
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
