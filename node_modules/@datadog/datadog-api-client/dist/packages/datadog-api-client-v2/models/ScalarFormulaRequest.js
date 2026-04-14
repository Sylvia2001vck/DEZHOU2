"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarFormulaRequest = void 0;
/**
 * A single scalar query to be executed.
 */
class ScalarFormulaRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarFormulaRequest.attributeTypeMap;
    }
}
exports.ScalarFormulaRequest = ScalarFormulaRequest;
/**
 * @ignore
 */
ScalarFormulaRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScalarFormulaRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ScalarFormulaRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarFormulaRequest.js.map