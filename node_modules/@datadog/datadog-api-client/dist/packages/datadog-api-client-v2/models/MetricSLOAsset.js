"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSLOAsset = void 0;
/**
 * A SLO object with title.
 */
class MetricSLOAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSLOAsset.attributeTypeMap;
    }
}
exports.MetricSLOAsset = MetricSLOAsset;
/**
 * @ignore
 */
MetricSLOAsset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricAssetAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MetricSLOType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSLOAsset.js.map