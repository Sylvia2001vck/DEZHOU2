"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricsResponse = void 0;
/**
 * All the available rum-based metric objects.
 */
class RumMetricsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricsResponse.attributeTypeMap;
    }
}
exports.RumMetricsResponse = RumMetricsResponse;
/**
 * @ignore
 */
RumMetricsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RumMetricResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricsResponse.js.map