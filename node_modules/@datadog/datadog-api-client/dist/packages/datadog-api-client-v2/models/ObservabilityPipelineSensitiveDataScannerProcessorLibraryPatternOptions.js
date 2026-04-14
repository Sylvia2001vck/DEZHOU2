"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions = void 0;
/**
 * Options for selecting a predefined library pattern and enabling keyword support.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions = ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    useRecommendedKeywords: {
        baseName: "use_recommended_keywords",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions.js.map