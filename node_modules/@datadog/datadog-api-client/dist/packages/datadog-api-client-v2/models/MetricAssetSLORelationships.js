"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetSLORelationships = void 0;
/**
 * An object containing a list of SLOs that can be referenced in the `included` data.
 */
class MetricAssetSLORelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetSLORelationships.attributeTypeMap;
    }
}
exports.MetricAssetSLORelationships = MetricAssetSLORelationships;
/**
 * @ignore
 */
MetricAssetSLORelationships.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricAssetSLORelationship>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetSLORelationships.js.map