"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricMetaPage = void 0;
/**
 * Paging attributes. Only present if pagination query parameters were provided.
 */
class MetricMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricMetaPage.attributeTypeMap;
    }
}
exports.MetricMetaPage = MetricMetaPage;
/**
 * @ignore
 */
MetricMetaPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    nextCursor: {
        baseName: "next_cursor",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricMetaPageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricMetaPage.js.map