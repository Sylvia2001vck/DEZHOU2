"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesFormulaQueryRequest = void 0;
/**
 * A request wrapper around a single timeseries query to be executed.
 */
class TimeseriesFormulaQueryRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesFormulaQueryRequest.attributeTypeMap;
    }
}
exports.TimeseriesFormulaQueryRequest = TimeseriesFormulaQueryRequest;
/**
 * @ignore
 */
TimeseriesFormulaQueryRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TimeseriesFormulaRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesFormulaQueryRequest.js.map