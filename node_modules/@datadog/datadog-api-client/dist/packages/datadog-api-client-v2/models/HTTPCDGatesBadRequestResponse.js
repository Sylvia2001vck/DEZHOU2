"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCDGatesBadRequestResponse = void 0;
/**
 * Bad request.
 */
class HTTPCDGatesBadRequestResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPCDGatesBadRequestResponse.attributeTypeMap;
    }
}
exports.HTTPCDGatesBadRequestResponse = HTTPCDGatesBadRequestResponse;
/**
 * @ignore
 */
HTTPCDGatesBadRequestResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<HTTPCIAppError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPCDGatesBadRequestResponse.js.map