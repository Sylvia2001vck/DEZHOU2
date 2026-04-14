"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSplunkHecDestination = void 0;
/**
 * The `splunk_hec` destination forwards logs to Splunk using the HTTP Event Collector (HEC).
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSplunkHecDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSplunkHecDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSplunkHecDestination = ObservabilityPipelineSplunkHecDestination;
/**
 * @ignore
 */
ObservabilityPipelineSplunkHecDestination.attributeTypeMap = {
    autoExtractTimestamp: {
        baseName: "auto_extract_timestamp",
        type: "boolean",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineSplunkHecDestinationEncoding",
    },
    endpointUrlKey: {
        baseName: "endpoint_url_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    index: {
        baseName: "index",
        type: "string",
    },
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    sourcetype: {
        baseName: "sourcetype",
        type: "string",
    },
    tokenKey: {
        baseName: "token_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSplunkHecDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSplunkHecDestination.js.map