"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricDistinctVolume = void 0;
/**
 * Object for a single metric's distinct volume.
 */
class MetricDistinctVolume {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricDistinctVolume.attributeTypeMap;
    }
}
exports.MetricDistinctVolume = MetricDistinctVolume;
/**
 * @ignore
 */
MetricDistinctVolume.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricDistinctVolumeAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricDistinctVolumeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricDistinctVolume.js.map