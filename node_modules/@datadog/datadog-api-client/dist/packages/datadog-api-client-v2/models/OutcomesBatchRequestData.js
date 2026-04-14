"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchRequestData = void 0;
/**
 * Scorecard outcomes batch request data.
 */
class OutcomesBatchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchRequestData.attributeTypeMap;
    }
}
exports.OutcomesBatchRequestData = OutcomesBatchRequestData;
/**
 * @ignore
 */
OutcomesBatchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OutcomesBatchAttributes",
    },
    type: {
        baseName: "type",
        type: "OutcomesBatchType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchRequestData.js.map