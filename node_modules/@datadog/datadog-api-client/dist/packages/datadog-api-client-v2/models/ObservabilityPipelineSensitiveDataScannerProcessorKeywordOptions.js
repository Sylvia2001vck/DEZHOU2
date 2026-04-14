"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions = void 0;
/**
 * Configuration for keywords used to reinforce sensitive data pattern detection.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions = ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions.attributeTypeMap = {
    keywords: {
        baseName: "keywords",
        type: "Array<string>",
        required: true,
    },
    proximity: {
        baseName: "proximity",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions.js.map