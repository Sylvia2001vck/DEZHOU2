"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFiltersOrderResponse = void 0;
/**
 * The list of RUM retention filter IDs along with type.
 */
class RumRetentionFiltersOrderResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFiltersOrderResponse.attributeTypeMap;
    }
}
exports.RumRetentionFiltersOrderResponse = RumRetentionFiltersOrderResponse;
/**
 * @ignore
 */
RumRetentionFiltersOrderResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RumRetentionFiltersOrderData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFiltersOrderResponse.js.map