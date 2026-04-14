"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedConnectionResponseData = void 0;
/**
 * Object describing an aggregated connection.
 */
class SingleAggregatedConnectionResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedConnectionResponseData.attributeTypeMap;
    }
}
exports.SingleAggregatedConnectionResponseData = SingleAggregatedConnectionResponseData;
/**
 * @ignore
 */
SingleAggregatedConnectionResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SingleAggregatedConnectionResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SingleAggregatedConnectionResponseDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedConnectionResponseData.js.map