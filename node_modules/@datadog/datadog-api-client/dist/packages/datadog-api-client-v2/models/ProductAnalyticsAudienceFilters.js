"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAudienceFilters = void 0;
/**
 * Audience filter definitions for targeting specific user segments.
 */
class ProductAnalyticsAudienceFilters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAudienceFilters.attributeTypeMap;
    }
}
exports.ProductAnalyticsAudienceFilters = ProductAnalyticsAudienceFilters;
/**
 * @ignore
 */
ProductAnalyticsAudienceFilters.attributeTypeMap = {
    accounts: {
        baseName: "accounts",
        type: "Array<ProductAnalyticsAudienceAccountSubquery>",
    },
    formula: {
        baseName: "formula",
        type: "string",
    },
    segments: {
        baseName: "segments",
        type: "Array<ProductAnalyticsAudienceSegmentSubquery>",
    },
    users: {
        baseName: "users",
        type: "Array<ProductAnalyticsAudienceUserSubquery>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAudienceFilters.js.map