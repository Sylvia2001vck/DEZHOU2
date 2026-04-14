"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsScalarQuery = void 0;
/**
 * An individual scalar metrics query.
 */
class MetricsScalarQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsScalarQuery.attributeTypeMap;
    }
}
exports.MetricsScalarQuery = MetricsScalarQuery;
/**
 * @ignore
 */
MetricsScalarQuery.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "MetricsAggregator",
        required: true,
    },
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
//# sourceMappingURL=MetricsScalarQuery.js.map