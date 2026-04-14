"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatCreateOrganizationHandleRequestAttributes = void 0;
/**
 * Organization handle attributes for a create request.
 */
class GoogleChatCreateOrganizationHandleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatCreateOrganizationHandleRequestAttributes.attributeTypeMap;
    }
}
exports.GoogleChatCreateOrganizationHandleRequestAttributes = GoogleChatCreateOrganizationHandleRequestAttributes;
/**
 * @ignore
 */
GoogleChatCreateOrganizationHandleRequestAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    spaceResourceName: {
        baseName: "space_resource_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatCreateOrganizationHandleRequestAttributes.js.map