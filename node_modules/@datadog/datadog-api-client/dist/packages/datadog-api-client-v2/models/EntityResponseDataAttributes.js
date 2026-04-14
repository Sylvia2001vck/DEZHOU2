"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataAttributes = void 0;
class EntityResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataAttributes.attributeTypeMap;
    }
}
exports.EntityResponseDataAttributes = EntityResponseDataAttributes;
/**
 * @ignore
 */
EntityResponseDataAttributes.attributeTypeMap = {
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
    properties: {
        baseName: "properties",
        type: "{ [key: string]: any; }",
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
//# sourceMappingURL=EntityResponseDataAttributes.js.map