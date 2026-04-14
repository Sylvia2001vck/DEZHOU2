"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigResponse = void 0;
/**
 * Wrapper for a single bulk tag configuration status response.
 */
class MetricBulkTagConfigResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigResponse.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigResponse = MetricBulkTagConfigResponse;
/**
 * @ignore
 */
MetricBulkTagConfigResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricBulkTagConfigStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricBulkTagConfigResponse.js.map