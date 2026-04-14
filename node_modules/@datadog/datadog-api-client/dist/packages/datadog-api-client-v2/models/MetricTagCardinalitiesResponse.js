"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagCardinalitiesResponse = void 0;
/**
 * Response object that includes an array of objects representing the cardinality details of a metric's tags.
 */
class MetricTagCardinalitiesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagCardinalitiesResponse.attributeTypeMap;
    }
}
exports.MetricTagCardinalitiesResponse = MetricTagCardinalitiesResponse;
/**
 * @ignore
 */
MetricTagCardinalitiesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricTagCardinality>",
    },
    meta: {
        baseName: "meta",
        type: "MetricTagCardinalitiesMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagCardinalitiesResponse.js.map