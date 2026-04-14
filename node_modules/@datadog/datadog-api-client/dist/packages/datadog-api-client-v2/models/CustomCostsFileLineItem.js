"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileLineItem = void 0;
/**
 * Line item details from a Custom Costs file.
 */
class CustomCostsFileLineItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileLineItem.attributeTypeMap;
    }
}
exports.CustomCostsFileLineItem = CustomCostsFileLineItem;
/**
 * @ignore
 */
CustomCostsFileLineItem.attributeTypeMap = {
    billedCost: {
        baseName: "BilledCost",
        type: "number",
        format: "double",
    },
    billingCurrency: {
        baseName: "BillingCurrency",
        type: "string",
    },
    chargeDescription: {
        baseName: "ChargeDescription",
        type: "string",
    },
    chargePeriodEnd: {
        baseName: "ChargePeriodEnd",
        type: "string",
    },
    chargePeriodStart: {
        baseName: "ChargePeriodStart",
        type: "string",
    },
    providerName: {
        baseName: "ProviderName",
        type: "string",
    },
    tags: {
        baseName: "Tags",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileLineItem.js.map