"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONAPIErrorResponse = void 0;
/**
 * API error response.
 */
class JSONAPIErrorResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JSONAPIErrorResponse.attributeTypeMap;
    }
}
exports.JSONAPIErrorResponse = JSONAPIErrorResponse;
/**
 * @ignore
 */
JSONAPIErrorResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<JSONAPIErrorItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JSONAPIErrorResponse.js.map