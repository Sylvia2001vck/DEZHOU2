"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCIAppErrors = void 0;
/**
 * Errors occurred.
 */
class HTTPCIAppErrors {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPCIAppErrors.attributeTypeMap;
    }
}
exports.HTTPCIAppErrors = HTTPCIAppErrors;
/**
 * @ignore
 */
HTTPCIAppErrors.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<HTTPCIAppError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPCIAppErrors.js.map