"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchAttributes = void 0;
/**
 * The JSON:API attributes for a batched set of scorecard outcomes.
 */
class OutcomesBatchAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchAttributes.attributeTypeMap;
    }
}
exports.OutcomesBatchAttributes = OutcomesBatchAttributes;
/**
 * @ignore
 */
OutcomesBatchAttributes.attributeTypeMap = {
    results: {
        baseName: "results",
        type: "Array<OutcomesBatchRequestItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchAttributes.js.map