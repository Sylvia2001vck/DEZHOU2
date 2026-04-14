"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetsResponse = void 0;
/**
 * Response object that includes related dashboards, monitors, notebooks, and SLOs.
 */
class MetricAssetsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetsResponse.attributeTypeMap;
    }
}
exports.MetricAssetsResponse = MetricAssetsResponse;
/**
 * @ignore
 */
MetricAssetsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricAssetResponseData",
    },
    included: {
        baseName: "included",
        type: "Array<MetricAssetResponseIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetsResponse.js.map