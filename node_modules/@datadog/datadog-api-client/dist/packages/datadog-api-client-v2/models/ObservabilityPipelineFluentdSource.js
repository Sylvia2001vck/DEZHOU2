"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineFluentdSource = void 0;
/**
 * The `fluentd` source ingests logs from a Fluentd-compatible service.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineFluentdSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineFluentdSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineFluentdSource = ObservabilityPipelineFluentdSource;
/**
 * @ignore
 */
ObservabilityPipelineFluentdSource.attributeTypeMap = {
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
        type: "ObservabilityPipelineFluentdSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineFluentdSource.js.map