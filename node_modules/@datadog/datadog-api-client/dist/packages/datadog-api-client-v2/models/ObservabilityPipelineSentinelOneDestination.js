"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSentinelOneDestination = void 0;
/**
 * The `sentinel_one` destination sends logs to SentinelOne.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSentinelOneDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSentinelOneDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSentinelOneDestination = ObservabilityPipelineSentinelOneDestination;
/**
 * @ignore
 */
ObservabilityPipelineSentinelOneDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    region: {
        baseName: "region",
        type: "ObservabilityPipelineSentinelOneDestinationRegion",
        required: true,
    },
    tokenKey: {
        baseName: "token_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSentinelOneDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSentinelOneDestination.js.map