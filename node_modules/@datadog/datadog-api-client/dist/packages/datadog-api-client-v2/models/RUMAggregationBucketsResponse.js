"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMAggregationBucketsResponse = void 0;
/**
 * The query results.
 */
class RUMAggregationBucketsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMAggregationBucketsResponse.attributeTypeMap;
    }
}
exports.RUMAggregationBucketsResponse = RUMAggregationBucketsResponse;
/**
 * @ignore
 */
RUMAggregationBucketsResponse.attributeTypeMap = {
    buckets: {
        baseName: "buckets",
        type: "Array<RUMBucketResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMAggregationBucketsResponse.js.map