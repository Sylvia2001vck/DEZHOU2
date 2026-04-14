"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryAttributes = void 0;
/**
 * Attributes of the restriction query.
 */
class RestrictionQueryAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryAttributes.attributeTypeMap;
    }
}
exports.RestrictionQueryAttributes = RestrictionQueryAttributes;
/**
 * @ignore
 */
RestrictionQueryAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    lastModifierEmail: {
        baseName: "last_modifier_email",
        type: "string",
    },
    lastModifierName: {
        baseName: "last_modifier_name",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    restrictionQuery: {
        baseName: "restriction_query",
        type: "string",
    },
    roleCount: {
        baseName: "role_count",
        type: "number",
        format: "int64",
    },
    userCount: {
        baseName: "user_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryAttributes.js.map