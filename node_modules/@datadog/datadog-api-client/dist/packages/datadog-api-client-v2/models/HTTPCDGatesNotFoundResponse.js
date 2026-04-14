"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCDGatesNotFoundResponse = void 0;
/**
 * Deployment gate not found.
 */
class HTTPCDGatesNotFoundResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPCDGatesNotFoundResponse.attributeTypeMap;
    }
}
exports.HTTPCDGatesNotFoundResponse = HTTPCDGatesNotFoundResponse;
/**
 * @ignore
 */
HTTPCDGatesNotFoundResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<HTTPCIAppError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPCDGatesNotFoundResponse.js.map