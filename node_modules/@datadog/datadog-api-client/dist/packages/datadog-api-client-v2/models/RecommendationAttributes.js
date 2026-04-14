"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationAttributes = void 0;
/**
 * Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.
 */
class RecommendationAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RecommendationAttributes.attributeTypeMap;
    }
}
exports.RecommendationAttributes = RecommendationAttributes;
/**
 * @ignore
 */
RecommendationAttributes.attributeTypeMap = {
    confidenceLevel: {
        baseName: "confidence_level",
        type: "number",
        format: "double",
    },
    driver: {
        baseName: "driver",
        type: "ComponentRecommendation",
        required: true,
    },
    executor: {
        baseName: "executor",
        type: "ComponentRecommendation",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RecommendationAttributes.js.map