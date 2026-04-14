"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalRuleResponseQuery = void 0;
/**
 * Query for matching rule on signals.
 */
class SecurityMonitoringSignalRuleResponseQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalRuleResponseQuery.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalRuleResponseQuery = SecurityMonitoringSignalRuleResponseQuery;
/**
 * @ignore
 */
SecurityMonitoringSignalRuleResponseQuery.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "SecurityMonitoringRuleQueryAggregation",
    },
    correlatedByFields: {
        baseName: "correlatedByFields",
        type: "Array<string>",
    },
    correlatedQueryIndex: {
        baseName: "correlatedQueryIndex",
        type: "number",
        format: "int32",
    },
    defaultRuleId: {
        baseName: "defaultRuleId",
        type: "string",
    },
    distinctFields: {
        baseName: "distinctFields",
        type: "Array<string>",
    },
    groupByFields: {
        baseName: "groupByFields",
        type: "Array<string>",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    ruleId: {
        baseName: "ruleId",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalRuleResponseQuery.js.map