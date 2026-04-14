"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsTimeseriesResponseAttributes = void 0;
class ProductAnalyticsTimeseriesResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsTimeseriesResponseAttributes.attributeTypeMap;
    }
}
exports.ProductAnalyticsTimeseriesResponseAttributes = ProductAnalyticsTimeseriesResponseAttributes;
/**
 * @ignore
 */
ProductAnalyticsTimeseriesResponseAttributes.attributeTypeMap = {
    intervals: {
        baseName: "intervals",
        type: "Array<ProductAnalyticsInterval>",
    },
    series: {
        baseName: "series",
        type: "Array<ProductAnalyticsSerie>",
    },
    times: {
        baseName: "times",
        type: "Array<number>",
    },
    values: {
        baseName: "values",
        type: "Array<Array<number>>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsTimeseriesResponseAttributes.js.map