"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterAll = void 0;
/**
 * The definition of the retention filter.
 */
class RetentionFilterAll {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterAll.attributeTypeMap;
    }
}
exports.RetentionFilterAll = RetentionFilterAll;
/**
 * @ignore
 */
RetentionFilterAll.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RetentionFilterAllAttributes",
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
//# sourceMappingURL=RetentionFilterAll.js.map