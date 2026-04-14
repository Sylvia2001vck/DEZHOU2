"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSplitArrayProcessor = void 0;
/**
 * The `split_array` processor splits array fields into separate events based on configured rules.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSplitArrayProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSplitArrayProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSplitArrayProcessor = ObservabilityPipelineSplitArrayProcessor;
/**
 * @ignore
 */
ObservabilityPipelineSplitArrayProcessor.attributeTypeMap = {
    arrays: {
        baseName: "arrays",
        type: "Array<ObservabilityPipelineSplitArrayProcessorArrayConfig>",
        required: true,
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSplitArrayProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSplitArrayProcessor.js.map