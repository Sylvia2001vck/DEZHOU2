"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOpenSearchDestination = void 0;
/**
 * The `opensearch` destination writes logs to an OpenSearch cluster.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineOpenSearchDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOpenSearchDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOpenSearchDestination = ObservabilityPipelineOpenSearchDestination;
/**
 * @ignore
 */
ObservabilityPipelineOpenSearchDestination.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineElasticsearchDestinationAuth",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    bulkIndex: {
        baseName: "bulk_index",
        type: "string",
    },
    dataStream: {
        baseName: "data_stream",
        type: "ObservabilityPipelineOpenSearchDestinationDataStream",
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
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineOpenSearchDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOpenSearchDestination.js.map