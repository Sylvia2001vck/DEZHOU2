"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAttributesResponse = void 0;
/**
 * Dataset metadata and configuration(s).
 */
class DatasetAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetAttributesResponse.attributeTypeMap;
    }
}
exports.DatasetAttributesResponse = DatasetAttributesResponse;
/**
 * @ignore
 */
DatasetAttributesResponse.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    principals: {
        baseName: "principals",
        type: "Array<string>",
    },
    productFilters: {
        baseName: "product_filters",
        type: "Array<FiltersPerProduct>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetAttributesResponse.js.map