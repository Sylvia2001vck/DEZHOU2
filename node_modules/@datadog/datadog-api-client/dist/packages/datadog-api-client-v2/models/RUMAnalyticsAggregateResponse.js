"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMAnalyticsAggregateResponse = void 0;
/**
 * The response object for the RUM events aggregate API endpoint.
 */
class RUMAnalyticsAggregateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMAnalyticsAggregateResponse.attributeTypeMap;
    }
}
exports.RUMAnalyticsAggregateResponse = RUMAnalyticsAggregateResponse;
/**
 * @ignore
 */
RUMAnalyticsAggregateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RUMAggregationBucketsResponse",
    },
    links: {
        baseName: "links",
        type: "RUMResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "RUMResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMAnalyticsAggregateResponse.js.map