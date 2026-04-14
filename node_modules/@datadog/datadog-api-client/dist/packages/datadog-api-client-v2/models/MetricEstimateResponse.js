"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricEstimateResponse = void 0;
/**
 * Response object that includes metric cardinality estimates.
 */
class MetricEstimateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricEstimateResponse.attributeTypeMap;
    }
}
exports.MetricEstimateResponse = MetricEstimateResponse;
/**
 * @ignore
 */
MetricEstimateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricEstimate",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricEstimateResponse.js.map