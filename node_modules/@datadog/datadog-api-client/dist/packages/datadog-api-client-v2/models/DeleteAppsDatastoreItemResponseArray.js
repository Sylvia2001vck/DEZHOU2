"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsDatastoreItemResponseArray = void 0;
/**
 * The definition of `DeleteAppsDatastoreItemResponseArray` object.
 */
class DeleteAppsDatastoreItemResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsDatastoreItemResponseArray.attributeTypeMap;
    }
}
exports.DeleteAppsDatastoreItemResponseArray = DeleteAppsDatastoreItemResponseArray;
/**
 * @ignore
 */
DeleteAppsDatastoreItemResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DeleteAppsDatastoreItemResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsDatastoreItemResponseArray.js.map