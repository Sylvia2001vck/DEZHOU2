"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricUpdateAttributes = void 0;
/**
 * The rum-based metric properties that will be updated.
 */
class RumMetricUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricUpdateAttributes.attributeTypeMap;
    }
}
exports.RumMetricUpdateAttributes = RumMetricUpdateAttributes;
/**
 * @ignore
 */
RumMetricUpdateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "RumMetricUpdateCompute",
    },
    filter: {
        baseName: "filter",
        type: "RumMetricFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<RumMetricGroupBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricUpdateAttributes.js.map