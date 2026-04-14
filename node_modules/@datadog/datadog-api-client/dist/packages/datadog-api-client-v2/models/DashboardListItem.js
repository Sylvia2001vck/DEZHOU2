"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListItem = void 0;
/**
 * A dashboard within a list.
 */
class DashboardListItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListItem.attributeTypeMap;
    }
}
exports.DashboardListItem = DashboardListItem;
/**
 * @ignore
 */
DashboardListItem.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "Creator",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    integrationId: {
        baseName: "integration_id",
        type: "string",
    },
    isFavorite: {
        baseName: "is_favorite",
        type: "boolean",
    },
    isReadOnly: {
        baseName: "is_read_only",
        type: "boolean",
    },
    isShared: {
        baseName: "is_shared",
        type: "boolean",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    popularity: {
        baseName: "popularity",
        type: "number",
        format: "int32",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DashboardType",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListItem.js.map