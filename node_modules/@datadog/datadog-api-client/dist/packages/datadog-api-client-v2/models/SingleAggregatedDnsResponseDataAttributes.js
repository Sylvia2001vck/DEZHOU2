"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedDnsResponseDataAttributes = void 0;
/**
 * Attributes for an aggregated DNS flow.
 */
class SingleAggregatedDnsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedDnsResponseDataAttributes.attributeTypeMap;
    }
}
exports.SingleAggregatedDnsResponseDataAttributes = SingleAggregatedDnsResponseDataAttributes;
/**
 * @ignore
 */
SingleAggregatedDnsResponseDataAttributes.attributeTypeMap = {
    groupBys: {
        baseName: "group_bys",
        type: "Array<SingleAggregatedDnsResponseDataAttributesGroupByItems>",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<SingleAggregatedDnsResponseDataAttributesMetricsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedDnsResponseDataAttributes.js.map