"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationUpdateAttributes = void 0;
/**
 * RUM application update attributes.
 */
class RUMApplicationUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationUpdateAttributes.attributeTypeMap;
    }
}
exports.RUMApplicationUpdateAttributes = RUMApplicationUpdateAttributes;
/**
 * @ignore
 */
RUMApplicationUpdateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    productAnalyticsRetentionState: {
        baseName: "product_analytics_retention_state",
        type: "RUMProductAnalyticsRetentionState",
    },
    rumEventProcessingState: {
        baseName: "rum_event_processing_state",
        type: "RUMEventProcessingState",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationUpdateAttributes.js.map