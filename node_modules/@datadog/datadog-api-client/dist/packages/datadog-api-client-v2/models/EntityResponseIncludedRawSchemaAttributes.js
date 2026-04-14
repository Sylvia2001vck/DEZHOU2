"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRawSchemaAttributes = void 0;
/**
 * Included raw schema attributes.
 */
class EntityResponseIncludedRawSchemaAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRawSchemaAttributes.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRawSchemaAttributes = EntityResponseIncludedRawSchemaAttributes;
/**
 * @ignore
 */
EntityResponseIncludedRawSchemaAttributes.attributeTypeMap = {
    rawSchema: {
        baseName: "rawSchema",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRawSchemaAttributes.js.map