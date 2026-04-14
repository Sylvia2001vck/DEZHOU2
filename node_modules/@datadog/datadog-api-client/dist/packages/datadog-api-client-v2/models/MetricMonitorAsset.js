"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricMonitorAsset = void 0;
/**
 * A monitor object with title.
 */
class MetricMonitorAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricMonitorAsset.attributeTypeMap;
    }
}
exports.MetricMonitorAsset = MetricMonitorAsset;
/**
 * @ignore
 */
MetricMonitorAsset.attributeTypeMap = {
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
        type: "MetricMonitorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricMonitorAsset.js.map