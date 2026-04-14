"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreItemRequestDataAttributes = void 0;
/**
 * Attributes for updating a datastore item, including the item key and changes to apply.
 */
class UpdateAppsDatastoreItemRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreItemRequestDataAttributes = UpdateAppsDatastoreItemRequestDataAttributes;
/**
 * @ignore
 */
UpdateAppsDatastoreItemRequestDataAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    itemChanges: {
        baseName: "item_changes",
        type: "UpdateAppsDatastoreItemRequestDataAttributesItemChanges",
        required: true,
    },
    itemKey: {
        baseName: "item_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreItemRequestDataAttributes.js.map