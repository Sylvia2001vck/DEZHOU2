"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilter = void 0;
/**
 * The definition of the retention filter.
 */
class RetentionFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilter.attributeTypeMap;
    }
}
exports.RetentionFilter = RetentionFilter;
/**
 * @ignore
 */
RetentionFilter.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RetentionFilterAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApmRetentionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilter.js.map