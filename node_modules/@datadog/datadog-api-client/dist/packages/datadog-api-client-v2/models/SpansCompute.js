"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansCompute = void 0;
/**
 * A compute rule to compute metrics or timeseries.
 */
class SpansCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansCompute.attributeTypeMap;
    }
}
exports.SpansCompute = SpansCompute;
/**
 * @ignore
 */
SpansCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "SpansAggregationFunction",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SpansComputeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansCompute.js.map