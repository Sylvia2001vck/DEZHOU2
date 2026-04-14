"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationCreateAttributes = void 0;
/**
 * RUM application creation attributes.
 */
class RUMApplicationCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationCreateAttributes.attributeTypeMap;
    }
}
exports.RUMApplicationCreateAttributes = RUMApplicationCreateAttributes;
/**
 * @ignore
 */
RUMApplicationCreateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
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
//# sourceMappingURL=RUMApplicationCreateAttributes.js.map