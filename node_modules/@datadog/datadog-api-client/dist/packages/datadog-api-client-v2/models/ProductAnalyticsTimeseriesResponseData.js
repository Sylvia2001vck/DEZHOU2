"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsTimeseriesResponseData = void 0;
class ProductAnalyticsTimeseriesResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsTimeseriesResponseData.attributeTypeMap;
    }
}
exports.ProductAnalyticsTimeseriesResponseData = ProductAnalyticsTimeseriesResponseData;
/**
 * @ignore
 */
ProductAnalyticsTimeseriesResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProductAnalyticsTimeseriesResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ProductAnalyticsTimeseriesResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsTimeseriesResponseData.js.map