"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreRequestData = void 0;
/**
 * Data wrapper containing the datastore identifier and the attributes to update.
 */
class UpdateAppsDatastoreRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreRequestData.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreRequestData = UpdateAppsDatastoreRequestData;
/**
 * @ignore
 */
UpdateAppsDatastoreRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateAppsDatastoreRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatastoreDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreRequestData.js.map