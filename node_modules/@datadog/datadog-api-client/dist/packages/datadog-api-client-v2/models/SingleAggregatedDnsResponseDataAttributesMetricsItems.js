"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedDnsResponseDataAttributesMetricsItems = void 0;
/**
 * Metrics associated with an aggregated DNS flow.
 */
class SingleAggregatedDnsResponseDataAttributesMetricsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedDnsResponseDataAttributesMetricsItems.attributeTypeMap;
    }
}
exports.SingleAggregatedDnsResponseDataAttributesMetricsItems = SingleAggregatedDnsResponseDataAttributesMetricsItems;
/**
 * @ignore
 */
SingleAggregatedDnsResponseDataAttributesMetricsItems.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "DnsMetricKey",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedDnsResponseDataAttributesMetricsItems.js.map