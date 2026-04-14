"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSplitArrayProcessorArrayConfig = void 0;
/**
 * Configuration for a single array split operation.
 */
class ObservabilityPipelineSplitArrayProcessorArrayConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSplitArrayProcessorArrayConfig.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSplitArrayProcessorArrayConfig = ObservabilityPipelineSplitArrayProcessorArrayConfig;
/**
 * @ignore
 */
ObservabilityPipelineSplitArrayProcessorArrayConfig.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSplitArrayProcessorArrayConfig.js.map