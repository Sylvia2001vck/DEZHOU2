"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEntityCatalogResponse = void 0;
/**
 * List entity response.
 */
class ListEntityCatalogResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListEntityCatalogResponse.attributeTypeMap;
    }
}
exports.ListEntityCatalogResponse = ListEntityCatalogResponse;
/**
 * @ignore
 */
ListEntityCatalogResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EntityData>",
    },
    included: {
        baseName: "included",
        type: "Array<ListEntityCatalogResponseIncludedItem>",
    },
    links: {
        baseName: "links",
        type: "ListEntityCatalogResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "EntityResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListEntityCatalogResponse.js.map