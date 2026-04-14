"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarFormulaQueryRequest = void 0;
/**
 * A wrapper request around one scalar query to be executed.
 */
class ScalarFormulaQueryRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarFormulaQueryRequest.attributeTypeMap;
    }
}
exports.ScalarFormulaQueryRequest = ScalarFormulaQueryRequest;
/**
 * @ignore
 */
ScalarFormulaQueryRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScalarFormulaRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarFormulaQueryRequest.js.map