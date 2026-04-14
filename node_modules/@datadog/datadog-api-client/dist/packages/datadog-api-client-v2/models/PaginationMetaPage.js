"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationMetaPage = void 0;
/**
 * Offset-based pagination schema.
 */
class PaginationMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PaginationMetaPage.attributeTypeMap;
    }
}
exports.PaginationMetaPage = PaginationMetaPage;
/**
 * @ignore
 */
PaginationMetaPage.attributeTypeMap = {
    firstOffset: {
        baseName: "first_offset",
        type: "number",
        format: "int64",
    },
    lastOffset: {
        baseName: "last_offset",
        type: "number",
        format: "int64",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    nextOffset: {
        baseName: "next_offset",
        type: "number",
        format: "int64",
    },
    offset: {
        baseName: "offset",
        type: "number",
        format: "int64",
    },
    prevOffset: {
        baseName: "prev_offset",
        type: "number",
        format: "int64",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "PaginationMetaPageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PaginationMetaPage.js.map