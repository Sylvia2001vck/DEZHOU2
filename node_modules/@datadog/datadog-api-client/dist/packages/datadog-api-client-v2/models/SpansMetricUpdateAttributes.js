"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricUpdateAttributes = void 0;
/**
 * The span-based metric properties that will be updated.
 */
class SpansMetricUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricUpdateAttributes.attributeTypeMap;
    }
}
exports.SpansMetricUpdateAttributes = SpansMetricUpdateAttributes;
/**
 * @ignore
 */
SpansMetricUpdateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "SpansMetricUpdateCompute",
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
//# sourceMappingURL=SpansMetricUpdateAttributes.js.map