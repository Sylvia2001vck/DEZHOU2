"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateAttributes = void 0;
/**
 * Attributes of the role.
 */
class RoleUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleUpdateAttributes.attributeTypeMap;
    }
}
exports.RoleUpdateAttributes = RoleUpdateAttributes;
/**
 * @ignore
 */
RoleUpdateAttributes.attributeTypeMap = {
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
    },
    receivesPermissionsFrom: {
        baseName: "receives_permissions_from",
        type: "Array<string>",
    },
    userCount: {
        baseName: "user_count",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleUpdateAttributes.js.map