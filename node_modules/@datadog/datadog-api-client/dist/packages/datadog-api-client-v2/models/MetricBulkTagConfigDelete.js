"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigDelete = void 0;
/**
 * Request object to bulk delete all tag configurations for metrics matching the given prefix.
 */
class MetricBulkTagConfigDelete {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigDelete.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigDelete = MetricBulkTagConfigDelete;
/**
 * @ignore
 */
MetricBulkTagConfigDelete.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricBulkTagConfigDeleteAttributes",
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
//# sourceMappingURL=MetricBulkTagConfigDelete.js.map