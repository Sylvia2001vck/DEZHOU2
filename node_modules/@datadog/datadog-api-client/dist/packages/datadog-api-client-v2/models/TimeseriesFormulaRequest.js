"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesFormulaRequest = void 0;
/**
 * A single timeseries query to be executed.
 */
class TimeseriesFormulaRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesFormulaRequest.attributeTypeMap;
    }
}
exports.TimeseriesFormulaRequest = TimeseriesFormulaRequest;
/**
 * @ignore
 */
TimeseriesFormulaRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TimeseriesFormulaRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TimeseriesFormulaRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesFormulaRequest.js.map