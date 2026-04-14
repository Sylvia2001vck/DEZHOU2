"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistDataAttributesCreatedBy = void 0;
class PlaylistDataAttributesCreatedBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistDataAttributesCreatedBy.attributeTypeMap;
    }
}
exports.PlaylistDataAttributesCreatedBy = PlaylistDataAttributesCreatedBy;
/**
 * @ignore
 */
PlaylistDataAttributesCreatedBy.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistDataAttributesCreatedBy.js.map