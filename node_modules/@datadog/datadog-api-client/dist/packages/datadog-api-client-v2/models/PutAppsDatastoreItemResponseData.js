"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAppsDatastoreItemResponseData = void 0;
/**
 * Data containing the identifier of a single item that was successfully inserted into the datastore.
 */
class PutAppsDatastoreItemResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PutAppsDatastoreItemResponseData.attributeTypeMap;
    }
}
exports.PutAppsDatastoreItemResponseData = PutAppsDatastoreItemResponseData;
/**
 * @ignore
 */
PutAppsDatastoreItemResponseData.attributeTypeMap = {
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
//# sourceMappingURL=PutAppsDatastoreItemResponseData.js.map