"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorMeta = void 0;
/**
 * Describes additional metadata for validation errors, including field names and error messages.
 */
class ValidationErrorMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ValidationErrorMeta.attributeTypeMap;
    }
}
exports.ValidationErrorMeta = ValidationErrorMeta;
/**
 * @ignore
 */
ValidationErrorMeta.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ValidationErrorMeta.js.map