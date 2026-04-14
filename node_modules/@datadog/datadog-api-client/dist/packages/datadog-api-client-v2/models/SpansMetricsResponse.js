"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricsResponse = void 0;
/**
 * All the available span-based metric objects.
 */
class SpansMetricsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricsResponse.attributeTypeMap;
    }
}
exports.SpansMetricsResponse = SpansMetricsResponse;
/**
 * @ignore
 */
SpansMetricsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SpansMetricResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricsResponse.js.map