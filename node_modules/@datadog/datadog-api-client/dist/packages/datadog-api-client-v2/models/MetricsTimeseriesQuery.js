"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsTimeseriesQuery = void 0;
/**
 * An individual timeseries metrics query.
 */
class MetricsTimeseriesQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsTimeseriesQuery.attributeTypeMap;
    }
}
exports.MetricsTimeseriesQuery = MetricsTimeseriesQuery;
/**
 * @ignore
 */
MetricsTimeseriesQuery.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "MetricsDataSource",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsTimeseriesQuery.js.map