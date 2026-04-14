"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedConnectionResponseArray = void 0;
/**
 * List of aggregated connections.
 */
class SingleAggregatedConnectionResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedConnectionResponseArray.attributeTypeMap;
    }
}
exports.SingleAggregatedConnectionResponseArray = SingleAggregatedConnectionResponseArray;
/**
 * @ignore
 */
SingleAggregatedConnectionResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SingleAggregatedConnectionResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedConnectionResponseArray.js.map