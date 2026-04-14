"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobQuery = void 0;
/**
 * Query for selecting logs analyzed by the threat hunting job.
 */
class ThreatHuntingJobQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobQuery.attributeTypeMap;
    }
}
exports.ThreatHuntingJobQuery = ThreatHuntingJobQuery;
/**
 * @ignore
 */
ThreatHuntingJobQuery.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "SecurityMonitoringRuleQueryAggregation",
    },
    dataSource: {
        baseName: "dataSource",
        type: "SecurityMonitoringStandardDataSource",
    },
    distinctFields: {
        baseName: "distinctFields",
        type: "Array<string>",
    },
    groupByFields: {
        baseName: "groupByFields",
        type: "Array<string>",
    },
    hasOptionalGroupByFields: {
        baseName: "hasOptionalGroupByFields",
        type: "boolean",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ThreatHuntingJobQuery.js.map