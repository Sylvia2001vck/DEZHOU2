"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFiltersResponse = void 0;
/**
 * An ordered list of retention filters.
 */
class RetentionFiltersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFiltersResponse.attributeTypeMap;
    }
}
exports.RetentionFiltersResponse = RetentionFiltersResponse;
/**
 * @ignore
 */
RetentionFiltersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RetentionFilterAll>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFiltersResponse.js.map