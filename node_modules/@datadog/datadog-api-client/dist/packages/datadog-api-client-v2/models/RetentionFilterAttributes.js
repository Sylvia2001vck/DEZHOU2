"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterAttributes = void 0;
/**
 * The attributes of the retention filter.
 */
class RetentionFilterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterAttributes.attributeTypeMap;
    }
}
exports.RetentionFilterAttributes = RetentionFilterAttributes;
/**
 * @ignore
 */
RetentionFilterAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    editable: {
        baseName: "editable",
        type: "boolean",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    executionOrder: {
        baseName: "execution_order",
        type: "number",
        format: "int64",
    },
    filter: {
        baseName: "filter",
        type: "SpansFilter",
    },
    filterType: {
        baseName: "filter_type",
        type: "RetentionFilterType",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "number",
        format: "int64",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    rate: {
        baseName: "rate",
        type: "number",
        format: "double",
    },
    traceRate: {
        baseName: "trace_rate",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterAttributes.js.map