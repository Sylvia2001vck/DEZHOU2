"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateAttributes = void 0;
/**
 * Team creation attributes
 */
class TeamCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamCreateAttributes.attributeTypeMap;
    }
}
exports.TeamCreateAttributes = TeamCreateAttributes;
/**
 * @ignore
 */
TeamCreateAttributes.attributeTypeMap = {
    avatar: {
        baseName: "avatar",
        type: "string",
    },
    banner: {
        baseName: "banner",
        type: "number",
        format: "int64",
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
    name: {
        baseName: "name",
        type: "string",
        required: true,
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
//# sourceMappingURL=TeamCreateAttributes.js.map