"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnectionRequestDataAttributesFieldsToUpdateItems = void 0;
class UpdateConnectionRequestDataAttributesFieldsToUpdateItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateConnectionRequestDataAttributesFieldsToUpdateItems.attributeTypeMap;
    }
}
exports.UpdateConnectionRequestDataAttributesFieldsToUpdateItems = UpdateConnectionRequestDataAttributesFieldsToUpdateItems;
/**
 * @ignore
 */
UpdateConnectionRequestDataAttributesFieldsToUpdateItems.attributeTypeMap = {
    fieldId: {
        baseName: "field_id",
        type: "string",
        required: true,
    },
    updatedDescription: {
        baseName: "updated_description",
        type: "string",
    },
    updatedDisplayName: {
        baseName: "updated_display_name",
        type: "string",
    },
    updatedFieldId: {
        baseName: "updated_field_id",
        type: "string",
    },
    updatedGroups: {
        baseName: "updated_groups",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateConnectionRequestDataAttributesFieldsToUpdateItems.js.map