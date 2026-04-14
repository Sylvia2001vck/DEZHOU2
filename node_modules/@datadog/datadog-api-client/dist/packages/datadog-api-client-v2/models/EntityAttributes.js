"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityAttributes = void 0;
/**
 * Entity attributes.
 */
class EntityAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityAttributes.attributeTypeMap;
    }
}
exports.EntityAttributes = EntityAttributes;
/**
 * @ignore
 */
EntityAttributes.attributeTypeMap = {
    apiVersion: {
        baseName: "apiVersion",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "displayName",
        type: "string",
    },
    kind: {
        baseName: "kind",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    owner: {
        baseName: "owner",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityAttributes.js.map