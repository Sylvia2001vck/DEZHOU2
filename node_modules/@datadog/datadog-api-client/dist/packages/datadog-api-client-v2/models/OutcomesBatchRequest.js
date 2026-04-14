"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchRequest = void 0;
/**
 * Scorecard outcomes batch request.
 */
class OutcomesBatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchRequest.attributeTypeMap;
    }
}
exports.OutcomesBatchRequest = OutcomesBatchRequest;
/**
 * @ignore
 */
OutcomesBatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OutcomesBatchRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchRequest.js.map