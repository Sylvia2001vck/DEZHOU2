"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3MetadataLinksItems = void 0;
/**
 * The definition of Entity V3 Metadata Links Items object.
 */
class EntityV3MetadataLinksItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3MetadataLinksItems.attributeTypeMap;
    }
}
exports.EntityV3MetadataLinksItems = EntityV3MetadataLinksItems;
/**
 * @ignore
 */
EntityV3MetadataLinksItems.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=EntityV3MetadataLinksItems.js.map