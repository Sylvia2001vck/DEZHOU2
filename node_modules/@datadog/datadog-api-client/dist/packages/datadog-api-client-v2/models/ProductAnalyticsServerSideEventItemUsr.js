"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsServerSideEventItemUsr = void 0;
/**
 * The user linked to your event.
 */
class ProductAnalyticsServerSideEventItemUsr {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsServerSideEventItemUsr.attributeTypeMap;
    }
}
exports.ProductAnalyticsServerSideEventItemUsr = ProductAnalyticsServerSideEventItemUsr;
/**
 * @ignore
 */
ProductAnalyticsServerSideEventItemUsr.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsServerSideEventItemUsr.js.map