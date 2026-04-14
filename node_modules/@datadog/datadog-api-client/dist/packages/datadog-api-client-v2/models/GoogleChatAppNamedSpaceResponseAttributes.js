"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatAppNamedSpaceResponseAttributes = void 0;
/**
 * Google Chat space attributes.
 */
class GoogleChatAppNamedSpaceResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatAppNamedSpaceResponseAttributes.attributeTypeMap;
    }
}
exports.GoogleChatAppNamedSpaceResponseAttributes = GoogleChatAppNamedSpaceResponseAttributes;
/**
 * @ignore
 */
GoogleChatAppNamedSpaceResponseAttributes.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    organizationBindingId: {
        baseName: "organization_binding_id",
        type: "string",
    },
    resourceName: {
        baseName: "resource_name",
        type: "string",
    },
    spaceUri: {
        baseName: "space_uri",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatAppNamedSpaceResponseAttributes.js.map