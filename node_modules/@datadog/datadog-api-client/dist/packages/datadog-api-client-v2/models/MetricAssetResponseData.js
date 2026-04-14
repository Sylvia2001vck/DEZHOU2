"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetResponseData = void 0;
/**
 * Metric assets response data.
 */
class MetricAssetResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetResponseData.attributeTypeMap;
    }
}
exports.MetricAssetResponseData = MetricAssetResponseData;
/**
 * @ignore
 */
MetricAssetResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "MetricAssetResponseRelationships",
    },
    type: {
        baseName: "type",
        type: "MetricType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetResponseData.js.map