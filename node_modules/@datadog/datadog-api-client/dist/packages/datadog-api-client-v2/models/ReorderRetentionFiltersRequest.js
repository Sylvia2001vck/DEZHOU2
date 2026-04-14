"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderRetentionFiltersRequest = void 0;
/**
 * A list of retention filters to reorder.
 */
class ReorderRetentionFiltersRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReorderRetentionFiltersRequest.attributeTypeMap;
    }
}
exports.ReorderRetentionFiltersRequest = ReorderRetentionFiltersRequest;
/**
 * @ignore
 */
ReorderRetentionFiltersRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RetentionFilterWithoutAttributes>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReorderRetentionFiltersRequest.js.map