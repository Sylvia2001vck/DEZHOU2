"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions = void 0;
/**
 * Fields to which the scope rule applies.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions = ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions.js.map