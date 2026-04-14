"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchResponse = void 0;
/**
 * Scorecard outcomes batch response.
 */
class OutcomesBatchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchResponse.attributeTypeMap;
    }
}
exports.OutcomesBatchResponse = OutcomesBatchResponse;
/**
 * @ignore
 */
OutcomesBatchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OutcomesResponseDataItem>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "OutcomesBatchResponseMeta",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchResponse.js.map