"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagCardinality = void 0;
/**
 * Object containing metadata and attributes related to a specific tag key associated with the metric.
 */
class MetricTagCardinality {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagCardinality.attributeTypeMap;
    }
}
exports.MetricTagCardinality = MetricTagCardinality;
/**
 * @ignore
 */
MetricTagCardinality.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricTagCardinalityAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagCardinality.js.map