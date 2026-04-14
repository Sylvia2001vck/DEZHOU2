"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterCreateAttributes = void 0;
/**
 * The object describing attributes of a RUM retention filter to create.
 */
class RumRetentionFilterCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterCreateAttributes.attributeTypeMap;
    }
}
exports.RumRetentionFilterCreateAttributes = RumRetentionFilterCreateAttributes;
/**
 * @ignore
 */
RumRetentionFilterCreateAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    eventType: {
        baseName: "event_type",
        type: "RumRetentionFilterEventType",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
    },
    sampleRate: {
        baseName: "sample_rate",
        type: "number",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterCreateAttributes.js.map