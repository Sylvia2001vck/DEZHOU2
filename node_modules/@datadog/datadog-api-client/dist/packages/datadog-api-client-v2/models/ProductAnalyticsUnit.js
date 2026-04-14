"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsUnit = void 0;
/**
 * A unit definition for metric values.
 */
class ProductAnalyticsUnit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsUnit.attributeTypeMap;
    }
}
exports.ProductAnalyticsUnit = ProductAnalyticsUnit;
/**
 * @ignore
 */
ProductAnalyticsUnit.attributeTypeMap = {
    family: {
        baseName: "family",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    plural: {
        baseName: "plural",
        type: "string",
    },
    scaleFactor: {
        baseName: "scale_factor",
        type: "number",
        format: "double",
    },
    shortName: {
        baseName: "short_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsUnit.js.map