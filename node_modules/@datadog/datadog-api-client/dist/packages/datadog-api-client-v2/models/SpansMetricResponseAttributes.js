"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricResponseAttributes = void 0;
/**
 * The object describing a Datadog span-based metric.
 */
class SpansMetricResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricResponseAttributes.attributeTypeMap;
    }
}
exports.SpansMetricResponseAttributes = SpansMetricResponseAttributes;
/**
 * @ignore
 */
SpansMetricResponseAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "SpansMetricResponseCompute",
    },
    filter: {
        baseName: "filter",
        type: "SpansMetricResponseFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<SpansMetricResponseGroupBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricResponseAttributes.js.map