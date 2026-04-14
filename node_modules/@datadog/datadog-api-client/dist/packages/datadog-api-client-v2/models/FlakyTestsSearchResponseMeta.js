"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchResponseMeta = void 0;
/**
 * Metadata for the flaky tests search response.
 */
class FlakyTestsSearchResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchResponseMeta.attributeTypeMap;
    }
}
exports.FlakyTestsSearchResponseMeta = FlakyTestsSearchResponseMeta;
/**
 * @ignore
 */
FlakyTestsSearchResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "FlakyTestsPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchResponseMeta.js.map