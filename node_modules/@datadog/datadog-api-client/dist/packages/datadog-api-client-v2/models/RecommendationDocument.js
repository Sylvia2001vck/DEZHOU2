"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationDocument = void 0;
/**
 * JSON:API document containing a single Recommendation resource. Returned by SPA when the Spark Gateway requests recommendations.
 */
class RecommendationDocument {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RecommendationDocument.attributeTypeMap;
    }
}
exports.RecommendationDocument = RecommendationDocument;
/**
 * @ignore
 */
RecommendationDocument.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RecommendationData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RecommendationDocument.js.map