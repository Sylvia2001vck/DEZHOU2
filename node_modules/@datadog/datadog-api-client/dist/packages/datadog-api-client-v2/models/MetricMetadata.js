"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricMetadata = void 0;
/**
 * Metadata for the metric.
 */
class MetricMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricMetadata.attributeTypeMap;
    }
}
exports.MetricMetadata = MetricMetadata;
/**
 * @ignore
 */
MetricMetadata.attributeTypeMap = {
    origin: {
        baseName: "origin",
        type: "MetricOrigin",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricMetadata.js.map