"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFiltersOrderRequest = void 0;
/**
 * The list of RUM retention filter IDs along with their corresponding type to reorder.
 * All retention filter IDs should be included in the list created for a RUM application.
 */
class RumRetentionFiltersOrderRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFiltersOrderRequest.attributeTypeMap;
    }
}
exports.RumRetentionFiltersOrderRequest = RumRetentionFiltersOrderRequest;
/**
 * @ignore
 */
RumRetentionFiltersOrderRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RumRetentionFiltersOrderData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFiltersOrderRequest.js.map