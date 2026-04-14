"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
/**
 * Represents a single validation error, including a human-readable title and metadata.
 */
class ValidationError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ValidationError.attributeTypeMap;
    }
}
exports.ValidationError = ValidationError;
/**
 * @ignore
 */
ValidationError.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "ValidationErrorMeta",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ValidationError.js.map