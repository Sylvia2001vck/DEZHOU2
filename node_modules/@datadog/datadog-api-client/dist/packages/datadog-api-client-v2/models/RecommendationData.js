"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationData = void 0;
/**
 * JSON:API resource object for SPA Recommendation. Includes type, optional ID, and resource attributes with structured recommendations.
 */
class RecommendationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RecommendationData.attributeTypeMap;
    }
}
exports.RecommendationData = RecommendationData;
/**
 * @ignore
 */
RecommendationData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RecommendationAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RecommendationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RecommendationData.js.map