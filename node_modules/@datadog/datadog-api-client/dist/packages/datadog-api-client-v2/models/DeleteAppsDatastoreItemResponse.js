"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemResponse = void 0;
/**
 * Response from successfully deleting a datastore item.
 */
class DeleteAppsDatastoreItemResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemResponse.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemResponse = DeleteAppsDatastoreItemResponse;
/**
 * @ignore
 */
DeleteAppsDatastoreItemResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeleteAppsDatastoreItemResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsDatastoreItemResponse.js.map