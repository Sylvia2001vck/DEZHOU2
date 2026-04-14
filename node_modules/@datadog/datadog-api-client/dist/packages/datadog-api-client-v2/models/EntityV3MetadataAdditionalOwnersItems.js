"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3MetadataAdditionalOwnersItems = void 0;
/**
 * The definition of Entity V3 Metadata Additional Owners Items object.
 */
class EntityV3MetadataAdditionalOwnersItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3MetadataAdditionalOwnersItems.attributeTypeMap;
    }
}
exports.EntityV3MetadataAdditionalOwnersItems = EntityV3MetadataAdditionalOwnersItems;
/**
 * @ignore
 */
EntityV3MetadataAdditionalOwnersItems.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityV3MetadataAdditionalOwnersItems.js.map