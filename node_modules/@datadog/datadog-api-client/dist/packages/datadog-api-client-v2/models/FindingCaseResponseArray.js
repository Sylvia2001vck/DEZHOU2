"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingCaseResponseArray = void 0;
/**
 * List of case responses.
 */
class FindingCaseResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingCaseResponseArray.attributeTypeMap;
    }
}
exports.FindingCaseResponseArray = FindingCaseResponseArray;
/**
 * @ignore
 */
FindingCaseResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FindingCaseResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingCaseResponseArray.js.map