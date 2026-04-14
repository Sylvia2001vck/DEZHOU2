"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3MetadataContactsItems = void 0;
/**
 * The definition of Entity V3 Metadata Contacts Items object.
 */
class EntityV3MetadataContactsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3MetadataContactsItems.attributeTypeMap;
    }
}
exports.EntityV3MetadataContactsItems = EntityV3MetadataContactsItems;
/**
 * @ignore
 */
EntityV3MetadataContactsItems.attributeTypeMap = {
    contact: {
        baseName: "contact",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=EntityV3MetadataContactsItems.js.map