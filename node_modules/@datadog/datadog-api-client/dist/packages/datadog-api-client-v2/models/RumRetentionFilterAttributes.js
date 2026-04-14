"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterAttributes = void 0;
/**
 * The object describing attributes of a RUM retention filter.
 */
class RumRetentionFilterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterAttributes.attributeTypeMap;
    }
}
exports.RumRetentionFilterAttributes = RumRetentionFilterAttributes;
/**
 * @ignore
 */
RumRetentionFilterAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    eventType: {
        baseName: "event_type",
        type: "RumRetentionFilterEventType",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    sampleRate: {
        baseName: "sample_rate",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterAttributes.js.map