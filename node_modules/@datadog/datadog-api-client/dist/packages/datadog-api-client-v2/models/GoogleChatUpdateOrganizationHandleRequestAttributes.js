"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatUpdateOrganizationHandleRequestAttributes = void 0;
/**
 * Organization handle attributes for an update request.
 */
class GoogleChatUpdateOrganizationHandleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatUpdateOrganizationHandleRequestAttributes.attributeTypeMap;
    }
}
exports.GoogleChatUpdateOrganizationHandleRequestAttributes = GoogleChatUpdateOrganizationHandleRequestAttributes;
/**
 * @ignore
 */
GoogleChatUpdateOrganizationHandleRequestAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
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
//# sourceMappingURL=GoogleChatUpdateOrganizationHandleRequestAttributes.js.map