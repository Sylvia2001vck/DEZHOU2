"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigDeleteRequest = void 0;
/**
 * Wrapper object for a single bulk tag deletion request.
 */
class MetricBulkTagConfigDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigDeleteRequest.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigDeleteRequest = MetricBulkTagConfigDeleteRequest;
/**
 * @ignore
 */
MetricBulkTagConfigDeleteRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricBulkTagConfigDelete",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricBulkTagConfigDeleteRequest.js.map