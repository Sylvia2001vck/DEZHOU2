"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponseDataItems = void 0;
/**
 * An app definition object. This contains only basic information about the app such as ID, name, and tags.
 */
class ListAppsResponseDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponseDataItems.attributeTypeMap;
    }
}
exports.ListAppsResponseDataItems = ListAppsResponseDataItems;
/**
 * @ignore
 */
ListAppsResponseDataItems.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ListAppsResponseDataItemsAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    meta: {
        baseName: "meta",
        type: "AppMeta",
    },
    relationships: {
        baseName: "relationships",
        type: "ListAppsResponseDataItemsRelationships",
    },
    type: {
        baseName: "type",
        type: "AppDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponseDataItems.js.map