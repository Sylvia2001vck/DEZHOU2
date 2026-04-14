"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarFormulaResponseAtrributes = void 0;
/**
 * The object describing a scalar response.
 */
class ScalarFormulaResponseAtrributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarFormulaResponseAtrributes.attributeTypeMap;
    }
}
exports.ScalarFormulaResponseAtrributes = ScalarFormulaResponseAtrributes;
/**
 * @ignore
 */
ScalarFormulaResponseAtrributes.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ScalarColumn>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarFormulaResponseAtrributes.js.map