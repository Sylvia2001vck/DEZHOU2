"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedEntityAttributes = void 0;
/**
 * Related entity attributes.
 */
class EntityResponseIncludedRelatedEntityAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedEntityAttributes.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedEntityAttributes = EntityResponseIncludedRelatedEntityAttributes;
/**
 * @ignore
 */
EntityResponseIncludedRelatedEntityAttributes.attributeTypeMap = {
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
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRelatedEntityAttributes.js.map