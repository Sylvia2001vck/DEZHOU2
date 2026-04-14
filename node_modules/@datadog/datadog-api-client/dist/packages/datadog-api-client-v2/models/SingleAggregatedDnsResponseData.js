"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedDnsResponseData = void 0;
/**
 * Object describing an aggregated DNS flow.
 */
class SingleAggregatedDnsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedDnsResponseData.attributeTypeMap;
    }
}
exports.SingleAggregatedDnsResponseData = SingleAggregatedDnsResponseData;
/**
 * @ignore
 */
SingleAggregatedDnsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SingleAggregatedDnsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SingleAggregatedDnsResponseDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedDnsResponseData.js.map