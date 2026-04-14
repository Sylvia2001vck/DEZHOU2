"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsServerSideEventErrors = void 0;
/**
 * Error response.
 */
class ProductAnalyticsServerSideEventErrors {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsServerSideEventErrors.attributeTypeMap;
    }
}
exports.ProductAnalyticsServerSideEventErrors = ProductAnalyticsServerSideEventErrors;
/**
 * @ignore
 */
ProductAnalyticsServerSideEventErrors.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<ProductAnalyticsServerSideEventError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsServerSideEventErrors.js.map