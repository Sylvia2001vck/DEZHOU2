"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteResponse = void 0;
/**
 * Synthetics suite response
 */
class SyntheticsSuiteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteResponse.attributeTypeMap;
    }
}
exports.SyntheticsSuiteResponse = SyntheticsSuiteResponse;
/**
 * @ignore
 */
SyntheticsSuiteResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SyntheticsSuiteResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteResponse.js.map