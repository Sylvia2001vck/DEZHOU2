"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineKafkaDestination = void 0;
/**
 * The `kafka` destination sends logs to Apache Kafka topics.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineKafkaDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineKafkaDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineKafkaDestination = ObservabilityPipelineKafkaDestination;
/**
 * @ignore
 */
ObservabilityPipelineKafkaDestination.attributeTypeMap = {
    bootstrapServersKey: {
        baseName: "bootstrap_servers_key",
        type: "string",
    },
    compression: {
        baseName: "compression",
        type: "ObservabilityPipelineKafkaDestinationCompression",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineKafkaDestinationEncoding",
        required: true,
    },
    headersKey: {
        baseName: "headers_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    keyField: {
        baseName: "key_field",
        type: "string",
    },
    librdkafkaOptions: {
        baseName: "librdkafka_options",
        type: "Array<ObservabilityPipelineKafkaLibrdkafkaOption>",
    },
    messageTimeoutMs: {
        baseName: "message_timeout_ms",
        type: "number",
        format: "int64",
    },
    rateLimitDurationSecs: {
        baseName: "rate_limit_duration_secs",
        type: "number",
        format: "int64",
    },
    rateLimitNum: {
        baseName: "rate_limit_num",
        type: "number",
        format: "int64",
    },
    sasl: {
        baseName: "sasl",
        type: "ObservabilityPipelineKafkaSasl",
    },
    socketTimeoutMs: {
        baseName: "socket_timeout_ms",
        type: "number",
        format: "int64",
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    topic: {
        baseName: "topic",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineKafkaDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineKafkaDestination.js.map