"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemRequest = void 0;
/**
 * Request to delete a specific item from a datastore by its primary key.
 */
class DeleteAppsDatastoreItemRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemRequest.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemRequest = DeleteAppsDatastoreItemRequest;
/**
 * @ignore
 */
DeleteAppsDatastoreItemRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeleteAppsDatastoreItemRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsDatastoreItemRequest.js.map