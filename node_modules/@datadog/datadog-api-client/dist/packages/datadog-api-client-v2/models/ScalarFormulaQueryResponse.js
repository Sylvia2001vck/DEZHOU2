"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarFormulaQueryResponse = void 0;
/**
 * A message containing one or more responses to scalar queries.
 */
class ScalarFormulaQueryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarFormulaQueryResponse.attributeTypeMap;
    }
}
exports.ScalarFormulaQueryResponse = ScalarFormulaQueryResponse;
/**
 * @ignore
 */
ScalarFormulaQueryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScalarResponse",
    },
    errors: {
        baseName: "errors",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarFormulaQueryResponse.js.map