"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessor = void 0;
/**
 * The `sensitive_data_scanner` processor detects and optionally redacts sensitive data in log events.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSensitiveDataScannerProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessor = ObservabilityPipelineSensitiveDataScannerProcessor;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    rules: {
        baseName: "rules",
        type: "Array<ObservabilityPipelineSensitiveDataScannerProcessorRule>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessor.js.map