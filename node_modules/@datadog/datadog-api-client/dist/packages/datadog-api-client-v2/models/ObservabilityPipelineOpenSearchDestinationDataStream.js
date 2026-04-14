"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOpenSearchDestinationDataStream = void 0;
/**
 * Configuration options for writing to OpenSearch Data Streams instead of a fixed index.
 */
class ObservabilityPipelineOpenSearchDestinationDataStream {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOpenSearchDestinationDataStream.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOpenSearchDestinationDataStream = ObservabilityPipelineOpenSearchDestinationDataStream;
/**
 * @ignore
 */
ObservabilityPipelineOpenSearchDestinationDataStream.attributeTypeMap = {
    dataset: {
        baseName: "dataset",
        type: "string",
    },
    dtype: {
        baseName: "dtype",
        type: "string",
    },
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOpenSearchDestinationDataStream.js.map