"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFiltersOrderData = void 0;
/**
 * The RUM retention filter data for ordering.
 */
class RumRetentionFiltersOrderData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFiltersOrderData.attributeTypeMap;
    }
}
exports.RumRetentionFiltersOrderData = RumRetentionFiltersOrderData;
/**
 * @ignore
 */
RumRetentionFiltersOrderData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RumRetentionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFiltersOrderData.js.map