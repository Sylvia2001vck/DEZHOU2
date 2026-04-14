"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreItemRequest = void 0;
/**
 * Request to update specific fields on an existing datastore item.
 */
class UpdateAppsDatastoreItemRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreItemRequest.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreItemRequest = UpdateAppsDatastoreItemRequest;
/**
 * @ignore
 */
UpdateAppsDatastoreItemRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateAppsDatastoreItemRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreItemRequest.js.map