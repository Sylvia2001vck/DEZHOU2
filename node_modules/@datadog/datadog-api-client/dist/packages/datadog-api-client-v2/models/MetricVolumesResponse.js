"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricVolumesResponse = void 0;
/**
 * Response object which includes a single metric's volume.
 */
class MetricVolumesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricVolumesResponse.attributeTypeMap;
    }
}
exports.MetricVolumesResponse = MetricVolumesResponse;
/**
 * @ignore
 */
MetricVolumesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricVolumes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricVolumesResponse.js.map