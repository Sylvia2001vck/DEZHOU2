"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCatalogEntityResponse = void 0;
/**
 * Upsert entity response.
 */
class UpsertCatalogEntityResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpsertCatalogEntityResponse.attributeTypeMap;
    }
}
exports.UpsertCatalogEntityResponse = UpsertCatalogEntityResponse;
/**
 * @ignore
 */
UpsertCatalogEntityResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EntityData>",
    },
    included: {
        baseName: "included",
        type: "Array<UpsertCatalogEntityResponseIncludedItem>",
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
//# sourceMappingURL=UpsertCatalogEntityResponse.js.map