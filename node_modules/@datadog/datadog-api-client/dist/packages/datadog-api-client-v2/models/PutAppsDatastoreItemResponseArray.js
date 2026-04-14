"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAppsDatastoreItemResponseArray = void 0;
/**
 * Response after successfully inserting multiple items into a datastore, containing the identifiers of the created items.
 */
class PutAppsDatastoreItemResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PutAppsDatastoreItemResponseArray.attributeTypeMap;
    }
}
exports.PutAppsDatastoreItemResponseArray = PutAppsDatastoreItemResponseArray;
/**
 * @ignore
 */
PutAppsDatastoreItemResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PutAppsDatastoreItemResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PutAppsDatastoreItemResponseArray.js.map