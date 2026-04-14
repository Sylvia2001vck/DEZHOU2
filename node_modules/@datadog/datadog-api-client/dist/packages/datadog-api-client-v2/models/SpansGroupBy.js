"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansGroupBy = void 0;
/**
 * A group by rule.
 */
class SpansGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansGroupBy.attributeTypeMap;
    }
}
exports.SpansGroupBy = SpansGroupBy;
/**
 * @ignore
 */
SpansGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    histogram: {
        baseName: "histogram",
        type: "SpansGroupByHistogram",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    missing: {
        baseName: "missing",
        type: "SpansGroupByMissing",
    },
    sort: {
        baseName: "sort",
        type: "SpansAggregateSort",
    },
    total: {
        baseName: "total",
        type: "SpansGroupByTotal",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansGroupBy.js.map