"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesResponseSeries = void 0;
class TimeseriesResponseSeries {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesResponseSeries.attributeTypeMap;
    }
}
exports.TimeseriesResponseSeries = TimeseriesResponseSeries;
/**
 * @ignore
 */
TimeseriesResponseSeries.attributeTypeMap = {
    groupTags: {
        baseName: "group_tags",
        type: "Array<string>",
    },
    queryIndex: {
        baseName: "query_index",
        type: "number",
        format: "int32",
    },
    unit: {
        baseName: "unit",
        type: "Array<Unit>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesResponseSeries.js.map