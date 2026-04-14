"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAllTagsResponse = void 0;
/**
 * Response object that includes a single metric's indexed and ingested tags.
 */
class MetricAllTagsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAllTagsResponse.attributeTypeMap;
    }
}
exports.MetricAllTagsResponse = MetricAllTagsResponse;
/**
 * @ignore
 */
MetricAllTagsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricAllTags",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAllTagsResponse.js.map