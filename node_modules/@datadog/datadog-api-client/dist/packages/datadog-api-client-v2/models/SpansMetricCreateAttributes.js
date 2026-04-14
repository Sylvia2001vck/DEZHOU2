"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricCreateAttributes = void 0;
/**
 * The object describing the Datadog span-based metric to create.
 */
class SpansMetricCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricCreateAttributes.attributeTypeMap;
    }
}
exports.SpansMetricCreateAttributes = SpansMetricCreateAttributes;
/**
 * @ignore
 */
SpansMetricCreateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "SpansMetricCompute",
        required: true,
    },
    filter: {
        baseName: "filter",
        type: "SpansMetricFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<SpansMetricGroupBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricCreateAttributes.js.map