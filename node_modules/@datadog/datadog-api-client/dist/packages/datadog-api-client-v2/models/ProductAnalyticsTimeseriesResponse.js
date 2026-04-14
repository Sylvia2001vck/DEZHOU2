"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsTimeseriesResponse = void 0;
/**
 * Response for a timeseries analytics query.
 */
class ProductAnalyticsTimeseriesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsTimeseriesResponse.attributeTypeMap;
    }
}
exports.ProductAnalyticsTimeseriesResponse = ProductAnalyticsTimeseriesResponse;
/**
 * @ignore
 */
ProductAnalyticsTimeseriesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProductAnalyticsTimeseriesResponseData",
    },
    meta: {
        baseName: "meta",
        type: "ProductAnalyticsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsTimeseriesResponse.js.map