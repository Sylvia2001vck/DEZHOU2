"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedDnsResponseArray = void 0;
/**
 * List of aggregated DNS flows.
 */
class SingleAggregatedDnsResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedDnsResponseArray.attributeTypeMap;
    }
}
exports.SingleAggregatedDnsResponseArray = SingleAggregatedDnsResponseArray;
/**
 * @ignore
 */
SingleAggregatedDnsResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SingleAggregatedDnsResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedDnsResponseArray.js.map