"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigCreateRequest = void 0;
/**
 * Wrapper object for a single bulk tag configuration request.
 */
class MetricBulkTagConfigCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigCreateRequest.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigCreateRequest = MetricBulkTagConfigCreateRequest;
/**
 * @ignore
 */
MetricBulkTagConfigCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricBulkTagConfigCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricBulkTagConfigCreateRequest.js.map