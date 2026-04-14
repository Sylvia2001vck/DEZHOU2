"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricCreateAttributes = void 0;
/**
 * The object describing the Datadog rum-based metric to create.
 */
class RumMetricCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricCreateAttributes.attributeTypeMap;
    }
}
exports.RumMetricCreateAttributes = RumMetricCreateAttributes;
/**
 * @ignore
 */
RumMetricCreateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "RumMetricCompute",
        required: true,
    },
    eventType: {
        baseName: "event_type",
        type: "RumMetricEventType",
        required: true,
    },
    filter: {
        baseName: "filter",
        type: "RumMetricFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<RumMetricGroupBy>",
    },
    uniqueness: {
        baseName: "uniqueness",
        type: "RumMetricUniqueness",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricCreateAttributes.js.map