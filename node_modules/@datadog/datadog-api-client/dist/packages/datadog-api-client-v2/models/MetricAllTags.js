"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAllTags = void 0;
/**
 * Object for a single metric's indexed and ingested tags.
 */
class MetricAllTags {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAllTags.attributeTypeMap;
    }
}
exports.MetricAllTags = MetricAllTags;
/**
 * @ignore
 */
MetricAllTags.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricAllTagsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAllTags.js.map