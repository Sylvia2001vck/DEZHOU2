"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationMeta = void 0;
/**
 * Response metadata.
 */
class PaginationMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PaginationMeta.attributeTypeMap;
    }
}
exports.PaginationMeta = PaginationMeta;
/**
 * @ignore
 */
PaginationMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "PaginationMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PaginationMeta.js.map