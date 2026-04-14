"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteSearchResponseData = void 0;
/**
 * Synthetics suite search response data
 */
class SyntheticsSuiteSearchResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteSearchResponseData.attributeTypeMap;
    }
}
exports.SyntheticsSuiteSearchResponseData = SyntheticsSuiteSearchResponseData;
/**
 * @ignore
 */
SyntheticsSuiteSearchResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsSuiteSearchResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "SuiteSearchResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteSearchResponseData.js.map