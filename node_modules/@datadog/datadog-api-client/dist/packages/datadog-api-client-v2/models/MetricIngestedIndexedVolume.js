"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricIngestedIndexedVolume = void 0;
/**
 * Object for a single metric's ingested and indexed volume.
 */
class MetricIngestedIndexedVolume {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricIngestedIndexedVolume.attributeTypeMap;
    }
}
exports.MetricIngestedIndexedVolume = MetricIngestedIndexedVolume;
/**
 * @ignore
 */
MetricIngestedIndexedVolume.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricIngestedIndexedVolumeAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricIngestedIndexedVolumeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricIngestedIndexedVolume.js.map