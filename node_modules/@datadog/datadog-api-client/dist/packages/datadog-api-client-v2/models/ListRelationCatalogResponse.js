"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRelationCatalogResponse = void 0;
/**
 * List entity relation response.
 */
class ListRelationCatalogResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListRelationCatalogResponse.attributeTypeMap;
    }
}
exports.ListRelationCatalogResponse = ListRelationCatalogResponse;
/**
 * @ignore
 */
ListRelationCatalogResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationResponse>",
    },
    included: {
        baseName: "included",
        type: "Array<EntityData>",
    },
    links: {
        baseName: "links",
        type: "ListRelationCatalogResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "RelationResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListRelationCatalogResponse.js.map