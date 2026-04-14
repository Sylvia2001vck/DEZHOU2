"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineFluentBitSource = void 0;
/**
 * The `fluent_bit` source ingests logs from Fluent Bit.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineFluentBitSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineFluentBitSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineFluentBitSource = ObservabilityPipelineFluentBitSource;
/**
 * @ignore
 */
ObservabilityPipelineFluentBitSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineFluentBitSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineFluentBitSource.js.map