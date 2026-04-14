"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesResponse = void 0;
/**
 * A message containing the response to a timeseries query.
 */
class TimeseriesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesResponse.attributeTypeMap;
    }
}
exports.TimeseriesResponse = TimeseriesResponse;
/**
 * @ignore
 */
TimeseriesResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TimeseriesResponseAttributes",
    },
    type: {
        baseName: "type",
        type: "TimeseriesFormulaResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesResponse.js.map