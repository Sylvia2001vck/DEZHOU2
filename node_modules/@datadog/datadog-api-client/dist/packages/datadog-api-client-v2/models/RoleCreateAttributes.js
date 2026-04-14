"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateAttributes = void 0;
/**
 * Attributes of the created role.
 */
class RoleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCreateAttributes.attributeTypeMap;
    }
}
exports.RoleCreateAttributes = RoleCreateAttributes;
/**
 * @ignore
 */
RoleCreateAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    receivesPermissionsFrom: {
        baseName: "receives_permissions_from",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleCreateAttributes.js.map