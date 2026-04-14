"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchResponse = void 0;
/**
 * Response object with flaky tests matching the search request.
 */
class FlakyTestsSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchResponse.attributeTypeMap;
    }
}
exports.FlakyTestsSearchResponse = FlakyTestsSearchResponse;
/**
 * @ignore
 */
FlakyTestsSearchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FlakyTest>",
    },
    meta: {
        baseName: "meta",
        type: "FlakyTestsSearchResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchResponse.js.map