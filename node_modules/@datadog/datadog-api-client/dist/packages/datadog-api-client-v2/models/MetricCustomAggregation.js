"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricCustomAggregation = void 0;
/**
 * A time and space aggregation combination for use in query.
 */
class MetricCustomAggregation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricCustomAggregation.attributeTypeMap;
    }
}
exports.MetricCustomAggregation = MetricCustomAggregation;
/**
 * @ignore
 */
MetricCustomAggregation.attributeTypeMap = {
    space: {
        baseName: "space",
        type: "MetricCustomSpaceAggregation",
        required: true,
    },
    time: {
        baseName: "time",
        type: "MetricCustomTimeAggregation",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricCustomAggregation.js.map