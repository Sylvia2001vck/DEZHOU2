"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResponse = void 0;
/**
 * Response containing validation errors.
 */
class ValidationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ValidationResponse.attributeTypeMap;
    }
}
exports.ValidationResponse = ValidationResponse;
/**
 * @ignore
 */
ValidationResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<ValidationError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ValidationResponse.js.map