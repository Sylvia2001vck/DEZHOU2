"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatOrganizationHandleResponseAttributes = void 0;
/**
 * Organization handle attributes.
 */
class GoogleChatOrganizationHandleResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatOrganizationHandleResponseAttributes.attributeTypeMap;
    }
}
exports.GoogleChatOrganizationHandleResponseAttributes = GoogleChatOrganizationHandleResponseAttributes;
/**
 * @ignore
 */
GoogleChatOrganizationHandleResponseAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    spaceDisplayName: {
        baseName: "space_display_name",
        type: "string",
    },
    spaceResourceName: {
        baseName: "space_resource_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatOrganizationHandleResponseAttributes.js.map