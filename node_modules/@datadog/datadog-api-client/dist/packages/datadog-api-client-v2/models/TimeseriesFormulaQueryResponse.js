"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesFormulaQueryResponse = void 0;
/**
 * A message containing one response to a timeseries query made with timeseries formula query request.
 */
class TimeseriesFormulaQueryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesFormulaQueryResponse.attributeTypeMap;
    }
}
exports.TimeseriesFormulaQueryResponse = TimeseriesFormulaQueryResponse;
/**
 * @ignore
 */
TimeseriesFormulaQueryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TimeseriesResponse",
    },
    errors: {
        baseName: "errors",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesFormulaQueryResponse.js.map