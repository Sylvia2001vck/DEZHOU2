"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFormula = void 0;
/**
 * A formula for calculation based on one or more queries.
 */
class QueryFormula {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryFormula.attributeTypeMap;
    }
}
exports.QueryFormula = QueryFormula;
/**
 * @ignore
 */
QueryFormula.attributeTypeMap = {
    formula: {
        baseName: "formula",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "FormulaLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryFormula.js.map