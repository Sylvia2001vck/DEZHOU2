"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMCompute = void 0;
/**
 * A compute rule to compute metrics or timeseries.
 */
class RUMCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMCompute.attributeTypeMap;
    }
}
exports.RUMCompute = RUMCompute;
/**
 * @ignore
 */
RUMCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "RUMAggregationFunction",
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
        type: "RUMComputeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMCompute.js.map