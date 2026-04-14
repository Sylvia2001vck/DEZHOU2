"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponseAttributes = void 0;
/**
 * The object describing a Datadog rum-based metric.
 */
class RumMetricResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponseAttributes.attributeTypeMap;
    }
}
exports.RumMetricResponseAttributes = RumMetricResponseAttributes;
/**
 * @ignore
 */
RumMetricResponseAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "RumMetricResponseCompute",
    },
    eventType: {
        baseName: "event_type",
        type: "RumMetricEventType",
    },
    filter: {
        baseName: "filter",
        type: "RumMetricResponseFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<RumMetricResponseGroupBy>",
    },
    uniqueness: {
        baseName: "uniqueness",
        type: "RumMetricResponseUniqueness",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricResponseAttributes.js.map