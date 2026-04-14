"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreItemRequestData = void 0;
/**
 * Data wrapper containing the item identifier and the changes to apply during the update operation.
 */
class UpdateAppsDatastoreItemRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreItemRequestData.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreItemRequestData = UpdateAppsDatastoreItemRequestData;
/**
 * @ignore
 */
UpdateAppsDatastoreItemRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateAppsDatastoreItemRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UpdateAppsDatastoreItemRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreItemRequestData.js.map