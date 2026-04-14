"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigCreate = void 0;
/**
 * Request object to bulk configure tags for metrics matching the given prefix.
 */
class MetricBulkTagConfigCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigCreate.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigCreate = MetricBulkTagConfigCreate;
/**
 * @ignore
 */
MetricBulkTagConfigCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricBulkTagConfigCreateAttributes",
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
//# sourceMappingURL=MetricBulkTagConfigCreate.js.map