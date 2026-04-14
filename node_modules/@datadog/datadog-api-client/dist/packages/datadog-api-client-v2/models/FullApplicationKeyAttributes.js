"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullApplicationKeyAttributes = void 0;
/**
 * Attributes of a full application key.
 */
class FullApplicationKeyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullApplicationKeyAttributes.attributeTypeMap;
    }
}
exports.FullApplicationKeyAttributes = FullApplicationKeyAttributes;
/**
 * @ignore
 */
FullApplicationKeyAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    last4: {
        baseName: "last4",
        type: "string",
    },
    lastUsedAt: {
        baseName: "last_used_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    scopes: {
        baseName: "scopes",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FullApplicationKeyAttributes.js.map