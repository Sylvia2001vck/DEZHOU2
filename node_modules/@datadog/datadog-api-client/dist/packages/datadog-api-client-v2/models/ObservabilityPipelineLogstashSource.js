"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineLogstashSource = void 0;
/**
 * The `logstash` source ingests logs from a Logstash forwarder.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineLogstashSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineLogstashSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineLogstashSource = ObservabilityPipelineLogstashSource;
/**
 * @ignore
 */
ObservabilityPipelineLogstashSource.attributeTypeMap = {
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
        type: "ObservabilityPipelineLogstashSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineLogstashSource.js.map