"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigStatus = void 0;
/**
 * The status of a request to bulk configure metric tags.
 * It contains the fields from the original request for reference.
 */
class MetricBulkTagConfigStatus {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigStatus.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigStatus = MetricBulkTagConfigStatus;
/**
 * @ignore
 */
MetricBulkTagConfigStatus.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricBulkTagConfigStatusAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MetricBulkConfigureTagsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricBulkTagConfigStatus.js.map