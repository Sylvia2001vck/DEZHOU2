"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionAttributes = void 0;
/**
 * Attributes of a permission.
 */
class PermissionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PermissionAttributes.attributeTypeMap;
    }
}
exports.PermissionAttributes = PermissionAttributes;
/**
 * @ignore
 */
PermissionAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    displayType: {
        baseName: "display_type",
        type: "string",
    },
    groupName: {
        baseName: "group_name",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    restricted: {
        baseName: "restricted",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PermissionAttributes.js.map