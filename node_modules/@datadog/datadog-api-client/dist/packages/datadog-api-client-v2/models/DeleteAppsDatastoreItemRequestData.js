"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemRequestData = void 0;
/**
 * Data wrapper containing the information needed to identify and delete a specific datastore item.
 */
class DeleteAppsDatastoreItemRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemRequestData.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemRequestData = DeleteAppsDatastoreItemRequestData;
/**
 * @ignore
 */
DeleteAppsDatastoreItemRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeleteAppsDatastoreItemRequestDataAttributes",
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
//# sourceMappingURL=DeleteAppsDatastoreItemRequestData.js.map