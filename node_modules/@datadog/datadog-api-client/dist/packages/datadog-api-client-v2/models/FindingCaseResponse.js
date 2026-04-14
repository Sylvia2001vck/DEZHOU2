"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingCaseResponse = void 0;
/**
 * Case response.
 */
class FindingCaseResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingCaseResponse.attributeTypeMap;
    }
}
exports.FindingCaseResponse = FindingCaseResponse;
/**
 * @ignore
 */
FindingCaseResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FindingCaseResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingCaseResponse.js.map