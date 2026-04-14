"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricEstimate = void 0;
/**
 * Object for a metric cardinality estimate.
 */
class MetricEstimate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricEstimate.attributeTypeMap;
    }
}
exports.MetricEstimate = MetricEstimate;
/**
 * @ignore
 */
MetricEstimate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricEstimateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricEstimateResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricEstimate.js.map