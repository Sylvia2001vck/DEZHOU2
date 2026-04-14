"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchRequest = void 0;
/**
 * The request for a flaky tests search.
 */
class FlakyTestsSearchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchRequest.attributeTypeMap;
    }
}
exports.FlakyTestsSearchRequest = FlakyTestsSearchRequest;
/**
 * @ignore
 */
FlakyTestsSearchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FlakyTestsSearchRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchRequest.js.map