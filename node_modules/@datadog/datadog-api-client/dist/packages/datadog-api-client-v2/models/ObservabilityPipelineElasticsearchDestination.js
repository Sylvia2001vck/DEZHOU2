"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineElasticsearchDestination = void 0;
/**
 * The `elasticsearch` destination writes logs to an Elasticsearch cluster.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineElasticsearchDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineElasticsearchDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineElasticsearchDestination = ObservabilityPipelineElasticsearchDestination;
/**
 * @ignore
 */
ObservabilityPipelineElasticsearchDestination.attributeTypeMap = {
    apiVersion: {
        baseName: "api_version",
        type: "ObservabilityPipelineElasticsearchDestinationApiVersion",
    },
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
        type: "ObservabilityPipelineElasticsearchDestinationDataStream",
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
        type: "ObservabilityPipelineElasticsearchDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineElasticsearchDestination.js.map