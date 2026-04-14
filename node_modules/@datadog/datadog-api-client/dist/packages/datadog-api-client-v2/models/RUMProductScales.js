"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMProductScales = void 0;
/**
 * Product Scales configuration for the RUM application.
 */
class RUMProductScales {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMProductScales.attributeTypeMap;
    }
}
exports.RUMProductScales = RUMProductScales;
/**
 * @ignore
 */
RUMProductScales.attributeTypeMap = {
    productAnalyticsRetentionScale: {
        baseName: "product_analytics_retention_scale",
        type: "RUMProductAnalyticsRetentionScale",
    },
    rumEventProcessingScale: {
        baseName: "rum_event_processing_scale",
        type: "RUMEventProcessingScale",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMProductScales.js.map