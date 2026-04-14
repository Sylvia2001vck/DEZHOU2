"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponseMeta = void 0;
/**
 * Pagination metadata.
 */
class ListAppsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponseMeta.attributeTypeMap;
    }
}
exports.ListAppsResponseMeta = ListAppsResponseMeta;
/**
 * @ignore
 */
ListAppsResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ListAppsResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponseMeta.js.map