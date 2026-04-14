"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsGroupBy = void 0;
/**
 * A group by rule
 */
class LogsGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsGroupBy.attributeTypeMap;
    }
}
exports.LogsGroupBy = LogsGroupBy;
/**
 * @ignore
 */
LogsGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    histogram: {
        baseName: "histogram",
        type: "LogsGroupByHistogram",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    missing: {
        baseName: "missing",
        type: "LogsGroupByMissing",
    },
    sort: {
        baseName: "sort",
        type: "LogsAggregateSort",
    },
    total: {
        baseName: "total",
        type: "LogsGroupByTotal",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsGroupBy.js.map