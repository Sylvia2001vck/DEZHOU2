"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesFormulaRequestAttributes = void 0;
/**
 * The object describing a timeseries formula request.
 */
class TimeseriesFormulaRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesFormulaRequestAttributes.attributeTypeMap;
    }
}
exports.TimeseriesFormulaRequestAttributes = TimeseriesFormulaRequestAttributes;
/**
 * @ignore
 */
TimeseriesFormulaRequestAttributes.attributeTypeMap = {
    formulas: {
        baseName: "formulas",
        type: "Array<QueryFormula>",
    },
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    queries: {
        baseName: "queries",
        type: "Array<TimeseriesQuery>",
        required: true,
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesFormulaRequestAttributes.js.map