"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMGroupBy = void 0;
/**
 * A group-by rule.
 */
class RUMGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMGroupBy.attributeTypeMap;
    }
}
exports.RUMGroupBy = RUMGroupBy;
/**
 * @ignore
 */
RUMGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    histogram: {
        baseName: "histogram",
        type: "RUMGroupByHistogram",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    missing: {
        baseName: "missing",
        type: "RUMGroupByMissing",
    },
    sort: {
        baseName: "sort",
        type: "RUMAggregateSort",
    },
    total: {
        baseName: "total",
        type: "RUMGroupByTotal",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMGroupBy.js.map