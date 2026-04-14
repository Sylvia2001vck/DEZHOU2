"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAttributesRequest = void 0;
/**
 * Dataset metadata and configurations.
 */
class DatasetAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetAttributesRequest.attributeTypeMap;
    }
}
exports.DatasetAttributesRequest = DatasetAttributesRequest;
/**
 * @ignore
 */
DatasetAttributesRequest.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    principals: {
        baseName: "principals",
        type: "Array<string>",
        required: true,
    },
    productFilters: {
        baseName: "product_filters",
        type: "Array<FiltersPerProduct>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetAttributesRequest.js.map