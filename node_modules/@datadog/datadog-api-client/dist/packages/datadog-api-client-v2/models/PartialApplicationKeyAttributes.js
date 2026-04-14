"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialApplicationKeyAttributes = void 0;
/**
 * Attributes of a partial application key.
 */
class PartialApplicationKeyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PartialApplicationKeyAttributes.attributeTypeMap;
    }
}
exports.PartialApplicationKeyAttributes = PartialApplicationKeyAttributes;
/**
 * @ignore
 */
PartialApplicationKeyAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    last4: {
        baseName: "last4",
        type: "string",
    },
    lastUsedAt: {
        baseName: "last_used_at",
        type: "string",
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
//# sourceMappingURL=PartialApplicationKeyAttributes.js.map