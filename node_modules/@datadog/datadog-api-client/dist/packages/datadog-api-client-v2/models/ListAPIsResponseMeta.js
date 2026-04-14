"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAPIsResponseMeta = void 0;
/**
 * Metadata for `ListAPIsResponse`.
 */
class ListAPIsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAPIsResponseMeta.attributeTypeMap;
    }
}
exports.ListAPIsResponseMeta = ListAPIsResponseMeta;
/**
 * @ignore
 */
ListAPIsResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "ListAPIsResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAPIsResponseMeta.js.map