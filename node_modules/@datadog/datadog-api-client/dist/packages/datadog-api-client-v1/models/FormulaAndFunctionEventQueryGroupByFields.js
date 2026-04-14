"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionEventQueryGroupByFields = void 0;
/**
 * Flat group by configuration using multiple event facet fields.
 */
class FormulaAndFunctionEventQueryGroupByFields {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryGroupByFields.attributeTypeMap;
    }
}
exports.FormulaAndFunctionEventQueryGroupByFields = FormulaAndFunctionEventQueryGroupByFields;
/**
 * @ignore
 */
FormulaAndFunctionEventQueryGroupByFields.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<string>",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    sort: {
        baseName: "sort",
        type: "FormulaAndFunctionEventQueryGroupBySort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionEventQueryGroupByFields.js.map