"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineRenameFieldsProcessorField = void 0;
/**
 * Defines how to rename a field in log events.
 */
class ObservabilityPipelineRenameFieldsProcessorField {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineRenameFieldsProcessorField.attributeTypeMap;
    }
}
exports.ObservabilityPipelineRenameFieldsProcessorField = ObservabilityPipelineRenameFieldsProcessorField;
/**
 * @ignore
 */
ObservabilityPipelineRenameFieldsProcessorField.attributeTypeMap = {
    destination: {
        baseName: "destination",
        type: "string",
        required: true,
    },
    preserveSource: {
        baseName: "preserve_source",
        type: "boolean",
        required: true,
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineRenameFieldsProcessorField.js.map