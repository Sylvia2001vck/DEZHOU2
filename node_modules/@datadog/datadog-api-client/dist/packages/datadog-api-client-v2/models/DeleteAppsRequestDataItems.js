"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsRequestDataItems = void 0;
/**
 * An object containing the ID of an app to delete.
 */
class DeleteAppsRequestDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsRequestDataItems.attributeTypeMap;
    }
}
exports.DeleteAppsRequestDataItems = DeleteAppsRequestDataItems;
/**
 * @ignore
 */
DeleteAppsRequestDataItems.attributeTypeMap = {
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
//# sourceMappingURL=DeleteAppsRequestDataItems.js.map