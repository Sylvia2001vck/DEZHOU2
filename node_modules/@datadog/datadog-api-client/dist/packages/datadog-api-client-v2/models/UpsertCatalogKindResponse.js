"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCatalogKindResponse = void 0;
/**
 * Upsert kind response.
 */
class UpsertCatalogKindResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpsertCatalogKindResponse.attributeTypeMap;
    }
}
exports.UpsertCatalogKindResponse = UpsertCatalogKindResponse;
/**
 * @ignore
 */
UpsertCatalogKindResponse.attributeTypeMap = {
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
//# sourceMappingURL=UpsertCatalogKindResponse.js.map