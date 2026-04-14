"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteSearchResponseDataAttributes = void 0;
/**
 * Synthetics suite search response data attributes
 */
class SyntheticsSuiteSearchResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteSearchResponseDataAttributes.attributeTypeMap;
    }
}
exports.SyntheticsSuiteSearchResponseDataAttributes = SyntheticsSuiteSearchResponseDataAttributes;
/**
 * @ignore
 */
SyntheticsSuiteSearchResponseDataAttributes.attributeTypeMap = {
    suites: {
        baseName: "suites",
        type: "Array<SyntheticsSuite>",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteSearchResponseDataAttributes.js.map