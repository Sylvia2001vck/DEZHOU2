"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchRequestAttributes = void 0;
/**
 * Attributes for the flaky tests search request.
 */
class FlakyTestsSearchRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchRequestAttributes.attributeTypeMap;
    }
}
exports.FlakyTestsSearchRequestAttributes = FlakyTestsSearchRequestAttributes;
/**
 * @ignore
 */
FlakyTestsSearchRequestAttributes.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "FlakyTestsSearchFilter",
    },
    includeHistory: {
        baseName: "include_history",
        type: "boolean",
    },
    page: {
        baseName: "page",
        type: "FlakyTestsSearchPageOptions",
    },
    sort: {
        baseName: "sort",
        type: "FlakyTestsSearchSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchRequestAttributes.js.map