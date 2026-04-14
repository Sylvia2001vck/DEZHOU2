"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLambdaTracedInvocationsResponse = void 0;
/**
 * Lambda Traced Invocations usage response.
 */
class UsageLambdaTracedInvocationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLambdaTracedInvocationsResponse.attributeTypeMap;
    }
}
exports.UsageLambdaTracedInvocationsResponse = UsageLambdaTracedInvocationsResponse;
/**
 * @ignore
 */
UsageLambdaTracedInvocationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UsageDataObject>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLambdaTracedInvocationsResponse.js.map