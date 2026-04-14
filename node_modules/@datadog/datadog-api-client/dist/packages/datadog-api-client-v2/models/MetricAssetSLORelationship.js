"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetSLORelationship = void 0;
/**
 * An object of type `slos` that can be referenced in the `included` data.
 */
class MetricAssetSLORelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetSLORelationship.attributeTypeMap;
    }
}
exports.MetricAssetSLORelationship = MetricAssetSLORelationship;
/**
 * @ignore
 */
MetricAssetSLORelationship.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricSLOType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetSLORelationship.js.map