"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterCreateAttributes = void 0;
/**
 * The object describing the configuration of the retention filter to create/update.
 */
class RetentionFilterCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterCreateAttributes.attributeTypeMap;
    }
}
exports.RetentionFilterCreateAttributes = RetentionFilterCreateAttributes;
/**
 * @ignore
 */
RetentionFilterCreateAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    filter: {
        baseName: "filter",
        type: "SpansFilterCreate",
        required: true,
    },
    filterType: {
        baseName: "filter_type",
        type: "RetentionFilterType",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    rate: {
        baseName: "rate",
        type: "number",
        required: true,
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
//# sourceMappingURL=RetentionFilterCreateAttributes.js.map