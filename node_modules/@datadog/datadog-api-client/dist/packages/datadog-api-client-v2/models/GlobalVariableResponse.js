"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableResponse = void 0;
/**
 * Global variable response.
 */
class GlobalVariableResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalVariableResponse.attributeTypeMap;
    }
}
exports.GlobalVariableResponse = GlobalVariableResponse;
/**
 * @ignore
 */
GlobalVariableResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GlobalVariableData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalVariableResponse.js.map