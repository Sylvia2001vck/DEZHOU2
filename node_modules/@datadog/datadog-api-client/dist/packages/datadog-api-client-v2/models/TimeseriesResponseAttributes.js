"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesResponseAttributes = void 0;
/**
 * The object describing a timeseries response.
 */
class TimeseriesResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesResponseAttributes.attributeTypeMap;
    }
}
exports.TimeseriesResponseAttributes = TimeseriesResponseAttributes;
/**
 * @ignore
 */
TimeseriesResponseAttributes.attributeTypeMap = {
    series: {
        baseName: "series",
        type: "Array<TimeseriesResponseSeries>",
    },
    times: {
        baseName: "times",
        type: "Array<number>",
    },
    values: {
        baseName: "values",
        type: "Array<Array<number>>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesResponseAttributes.js.map