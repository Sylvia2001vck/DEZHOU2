"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyProductsDataAttributesProductsItems = void 0;
class TenancyProductsDataAttributesProductsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyProductsDataAttributesProductsItems.attributeTypeMap;
    }
}
exports.TenancyProductsDataAttributesProductsItems = TenancyProductsDataAttributesProductsItems;
/**
 * @ignore
 */
TenancyProductsDataAttributesProductsItems.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    productKey: {
        baseName: "product_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyProductsDataAttributesProductsItems.js.map