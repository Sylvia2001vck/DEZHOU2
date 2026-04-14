"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaLimit = void 0;
/**
 * Message for specifying limits to the number of values returned by a query.
 * This limit is only for scalar queries and has no effect on timeseries queries.
 */
class FormulaLimit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaLimit.attributeTypeMap;
    }
}
exports.FormulaLimit = FormulaLimit;
/**
 * @ignore
 */
FormulaLimit.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int32",
    },
    order: {
        baseName: "order",
        type: "QuerySortOrder",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaLimit.js.map