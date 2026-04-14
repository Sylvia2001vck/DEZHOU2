"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloStatusDataAttributes = void 0;
/**
 * The attributes of the SLO status.
 */
class SloStatusDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloStatusDataAttributes.attributeTypeMap;
    }
}
exports.SloStatusDataAttributes = SloStatusDataAttributes;
/**
 * @ignore
 */
SloStatusDataAttributes.attributeTypeMap = {
    errorBudgetRemaining: {
        baseName: "error_budget_remaining",
        type: "number",
        required: true,
        format: "double",
    },
    rawErrorBudgetRemaining: {
        baseName: "raw_error_budget_remaining",
        type: "RawErrorBudgetRemaining",
        required: true,
    },
    sli: {
        baseName: "sli",
        type: "number",
        required: true,
        format: "double",
    },
    spanPrecision: {
        baseName: "span_precision",
        type: "number",
        required: true,
        format: "int64",
    },
    state: {
        baseName: "state",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloStatusDataAttributes.js.map