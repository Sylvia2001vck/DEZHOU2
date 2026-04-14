"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteResponseData = void 0;
/**
 * Synthetics suite response data
 */
class SyntheticsSuiteResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteResponseData.attributeTypeMap;
    }
}
exports.SyntheticsSuiteResponseData = SyntheticsSuiteResponseData;
/**
 * @ignore
 */
SyntheticsSuiteResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsSuite",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsSuiteTypes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteResponseData.js.map