"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreRequest = void 0;
/**
 * Request to update a datastore's configuration such as its name or description.
 */
class UpdateAppsDatastoreRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreRequest.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreRequest = UpdateAppsDatastoreRequest;
/**
 * @ignore
 */
UpdateAppsDatastoreRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateAppsDatastoreRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreRequest.js.map