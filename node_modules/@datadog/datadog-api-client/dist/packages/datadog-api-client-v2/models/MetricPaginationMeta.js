"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricPaginationMeta = void 0;
/**
 * Response metadata object.
 */
class MetricPaginationMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricPaginationMeta.attributeTypeMap;
    }
}
exports.MetricPaginationMeta = MetricPaginationMeta;
/**
 * @ignore
 */
MetricPaginationMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "MetricMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricPaginationMeta.js.map