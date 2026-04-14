"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringStandardRuleQuery = void 0;
/**
 * Query for matching rule.
 */
class SecurityMonitoringStandardRuleQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringStandardRuleQuery.attributeTypeMap;
    }
}
exports.SecurityMonitoringStandardRuleQuery = SecurityMonitoringStandardRuleQuery;
/**
 * @ignore
 */
SecurityMonitoringStandardRuleQuery.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "SecurityMonitoringRuleQueryAggregation",
    },
    customQueryExtension: {
        baseName: "customQueryExtension",
        type: "string",
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
    index: {
        baseName: "index",
        type: "string",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    metric: {
        baseName: "metric",
        type: "string",
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
//# sourceMappingURL=SecurityMonitoringStandardRuleQuery.js.map