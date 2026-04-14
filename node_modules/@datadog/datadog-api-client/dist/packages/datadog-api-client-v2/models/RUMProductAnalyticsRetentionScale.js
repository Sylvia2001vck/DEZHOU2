"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMProductAnalyticsRetentionScale = void 0;
/**
 * Product Analytics retention scale configuration.
 */
class RUMProductAnalyticsRetentionScale {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMProductAnalyticsRetentionScale.attributeTypeMap;
    }
}
exports.RUMProductAnalyticsRetentionScale = RUMProductAnalyticsRetentionScale;
/**
 * @ignore
 */
RUMProductAnalyticsRetentionScale.attributeTypeMap = {
    lastModifiedAt: {
        baseName: "last_modified_at",
        type: "number",
        format: "int64",
    },
    state: {
        baseName: "state",
        type: "RUMProductAnalyticsRetentionState",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMProductAnalyticsRetentionScale.js.map