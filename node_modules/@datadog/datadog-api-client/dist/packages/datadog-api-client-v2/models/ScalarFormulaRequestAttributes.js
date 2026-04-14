"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarFormulaRequestAttributes = void 0;
/**
 * The object describing a scalar formula request.
 */
class ScalarFormulaRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarFormulaRequestAttributes.attributeTypeMap;
    }
}
exports.ScalarFormulaRequestAttributes = ScalarFormulaRequestAttributes;
/**
 * @ignore
 */
ScalarFormulaRequestAttributes.attributeTypeMap = {
    formulas: {
        baseName: "formulas",
        type: "Array<QueryFormula>",
    },
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    queries: {
        baseName: "queries",
        type: "Array<ScalarQuery>",
        required: true,
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarFormulaRequestAttributes.js.map