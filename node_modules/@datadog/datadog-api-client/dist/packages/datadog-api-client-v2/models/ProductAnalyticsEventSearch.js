"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsEventSearch = void 0;
/**
 * Search parameters for an event query.
 */
class ProductAnalyticsEventSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsEventSearch.attributeTypeMap;
    }
}
exports.ProductAnalyticsEventSearch = ProductAnalyticsEventSearch;
/**
 * @ignore
 */
ProductAnalyticsEventSearch.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsEventSearch.js.map