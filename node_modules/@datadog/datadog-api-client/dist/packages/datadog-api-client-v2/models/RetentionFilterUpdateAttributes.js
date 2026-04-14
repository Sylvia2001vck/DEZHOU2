"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterUpdateAttributes = void 0;
/**
 * The object describing the configuration of the retention filter to create/update.
 */
class RetentionFilterUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterUpdateAttributes.attributeTypeMap;
    }
}
exports.RetentionFilterUpdateAttributes = RetentionFilterUpdateAttributes;
/**
 * @ignore
 */
RetentionFilterUpdateAttributes.attributeTypeMap = {
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
        type: "RetentionFilterAllType",
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
//# sourceMappingURL=RetentionFilterUpdateAttributes.js.map