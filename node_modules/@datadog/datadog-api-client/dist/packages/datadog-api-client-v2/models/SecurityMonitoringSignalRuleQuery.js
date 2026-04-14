"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalRuleQuery = void 0;
/**
 * Query for matching rule on signals.
 */
class SecurityMonitoringSignalRuleQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalRuleQuery.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalRuleQuery = SecurityMonitoringSignalRuleQuery;
/**
 * @ignore
 */
SecurityMonitoringSignalRuleQuery.attributeTypeMap = {
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
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalRuleQuery.js.map