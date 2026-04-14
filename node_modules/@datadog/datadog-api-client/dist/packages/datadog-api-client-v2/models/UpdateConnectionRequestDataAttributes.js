"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnectionRequestDataAttributes = void 0;
class UpdateConnectionRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateConnectionRequestDataAttributes.attributeTypeMap;
    }
}
exports.UpdateConnectionRequestDataAttributes = UpdateConnectionRequestDataAttributes;
/**
 * @ignore
 */
UpdateConnectionRequestDataAttributes.attributeTypeMap = {
    fieldsToAdd: {
        baseName: "fields_to_add",
        type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    fieldsToDelete: {
        baseName: "fields_to_delete",
        type: "Array<string>",
    },
    fieldsToUpdate: {
        baseName: "fields_to_update",
        type: "Array<UpdateConnectionRequestDataAttributesFieldsToUpdateItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateConnectionRequestDataAttributes.js.map