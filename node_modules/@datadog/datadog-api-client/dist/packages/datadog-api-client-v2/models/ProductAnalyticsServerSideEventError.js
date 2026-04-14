"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsServerSideEventError = void 0;
/**
 * Error details.
 */
class ProductAnalyticsServerSideEventError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsServerSideEventError.attributeTypeMap;
    }
}
exports.ProductAnalyticsServerSideEventError = ProductAnalyticsServerSideEventError;
/**
 * @ignore
 */
ProductAnalyticsServerSideEventError.attributeTypeMap = {
    detail: {
        baseName: "detail",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsServerSideEventError.js.map