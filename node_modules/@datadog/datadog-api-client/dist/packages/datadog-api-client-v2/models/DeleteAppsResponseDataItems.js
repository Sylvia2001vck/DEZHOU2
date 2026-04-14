"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsResponseDataItems = void 0;
/**
 * An object containing the ID of a deleted app.
 */
class DeleteAppsResponseDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsResponseDataItems.attributeTypeMap;
    }
}
exports.DeleteAppsResponseDataItems = DeleteAppsResponseDataItems;
/**
 * @ignore
 */
DeleteAppsResponseDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=DeleteAppsResponseDataItems.js.map