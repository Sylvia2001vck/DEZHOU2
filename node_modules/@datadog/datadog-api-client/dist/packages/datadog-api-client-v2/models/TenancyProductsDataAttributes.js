"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyProductsDataAttributes = void 0;
class TenancyProductsDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyProductsDataAttributes.attributeTypeMap;
    }
}
exports.TenancyProductsDataAttributes = TenancyProductsDataAttributes;
/**
 * @ignore
 */
TenancyProductsDataAttributes.attributeTypeMap = {
    products: {
        baseName: "products",
        type: "Array<TenancyProductsDataAttributesProductsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyProductsDataAttributes.js.map