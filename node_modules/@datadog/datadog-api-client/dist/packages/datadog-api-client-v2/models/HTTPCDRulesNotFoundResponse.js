"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCDRulesNotFoundResponse = void 0;
/**
 * Deployment rule not found.
 */
class HTTPCDRulesNotFoundResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPCDRulesNotFoundResponse.attributeTypeMap;
    }
}
exports.HTTPCDRulesNotFoundResponse = HTTPCDRulesNotFoundResponse;
/**
 * @ignore
 */
HTTPCDRulesNotFoundResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<HTTPCIAppError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPCDRulesNotFoundResponse.js.map