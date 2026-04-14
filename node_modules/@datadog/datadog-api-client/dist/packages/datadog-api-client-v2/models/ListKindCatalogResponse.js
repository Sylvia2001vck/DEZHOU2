"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListKindCatalogResponse = void 0;
/**
 * List kind response.
 */
class ListKindCatalogResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListKindCatalogResponse.attributeTypeMap;
    }
}
exports.ListKindCatalogResponse = ListKindCatalogResponse;
/**
 * @ignore
 */
ListKindCatalogResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<KindData>",
    },
    meta: {
        baseName: "meta",
        type: "KindResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListKindCatalogResponse.js.map