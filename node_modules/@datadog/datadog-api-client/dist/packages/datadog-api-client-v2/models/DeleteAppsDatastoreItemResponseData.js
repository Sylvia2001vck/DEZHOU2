"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemResponseData = void 0;
/**
 * Data containing the identifier of the datastore item that was successfully deleted.
 */
class DeleteAppsDatastoreItemResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemResponseData.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemResponseData = DeleteAppsDatastoreItemResponseData;
/**
 * @ignore
 */
DeleteAppsDatastoreItemResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatastoreItemsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsDatastoreItemResponseData.js.map