"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableJsonPatchRequest = void 0;
/**
 * JSON Patch request for global variable.
 */
class GlobalVariableJsonPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalVariableJsonPatchRequest.attributeTypeMap;
    }
}
exports.GlobalVariableJsonPatchRequest = GlobalVariableJsonPatchRequest;
/**
 * @ignore
 */
GlobalVariableJsonPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GlobalVariableJsonPatchRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalVariableJsonPatchRequest.js.map