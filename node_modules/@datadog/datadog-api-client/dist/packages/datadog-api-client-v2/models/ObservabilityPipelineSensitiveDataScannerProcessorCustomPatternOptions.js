"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions = void 0;
/**
 * Options for defining a custom regex pattern.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions = ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    rule: {
        baseName: "rule",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions.js.map