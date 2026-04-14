"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamAttributes = void 0;
/**
 * Team attributes
 */
class TeamAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamAttributes.attributeTypeMap;
    }
}
exports.TeamAttributes = TeamAttributes;
/**
 * @ignore
 */
TeamAttributes.attributeTypeMap = {
    avatar: {
        baseName: "avatar",
        type: "string",
    },
    banner: {
        baseName: "banner",
        type: "number",
        format: "int64",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    hiddenModules: {
        baseName: "hidden_modules",
        type: "Array<string>",
    },
    isManaged: {
        baseName: "is_managed",
        type: "boolean",
    },
    linkCount: {
        baseName: "link_count",
        type: "number",
        format: "int32",
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
    summary: {
        baseName: "summary",
        type: "string",
    },
    userCount: {
        baseName: "user_count",
        type: "number",
        format: "int32",
    },
    visibleModules: {
        baseName: "visible_modules",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamAttributes.js.map