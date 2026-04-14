"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonOpenSearchDestination = void 0;
/**
 * The `amazon_opensearch` destination writes logs to Amazon OpenSearch.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAmazonOpenSearchDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonOpenSearchDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonOpenSearchDestination = ObservabilityPipelineAmazonOpenSearchDestination;
/**
 * @ignore
 */
ObservabilityPipelineAmazonOpenSearchDestination.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineAmazonOpenSearchDestinationAuth",
        required: true,
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    bulkIndex: {
        baseName: "bulk_index",
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
        type: "ObservabilityPipelineAmazonOpenSearchDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonOpenSearchDestination.js.map