"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchRequestData = void 0;
/**
 * The JSON:API data for flaky tests search request.
 */
class FlakyTestsSearchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchRequestData.attributeTypeMap;
    }
}
exports.FlakyTestsSearchRequestData = FlakyTestsSearchRequestData;
/**
 * @ignore
 */
FlakyTestsSearchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FlakyTestsSearchRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "FlakyTestsSearchRequestDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchRequestData.js.map