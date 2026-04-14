"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterUpdateAttributes = void 0;
/**
 * The object describing attributes of a RUM retention filter to update.
 */
class RumRetentionFilterUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterUpdateAttributes.attributeTypeMap;
    }
}
exports.RumRetentionFilterUpdateAttributes = RumRetentionFilterUpdateAttributes;
/**
 * @ignore
 */
RumRetentionFilterUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=RumRetentionFilterUpdateAttributes.js.map