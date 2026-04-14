"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamReferenceAttributes = void 0;
/**
 * Encapsulates the basic attributes of a Team reference, such as name, handle, and an optional avatar or description.
 */
class TeamReferenceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamReferenceAttributes.attributeTypeMap;
    }
}
exports.TeamReferenceAttributes = TeamReferenceAttributes;
/**
 * @ignore
 */
TeamReferenceAttributes.attributeTypeMap = {
    avatar: {
        baseName: "avatar",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamReferenceAttributes.js.map