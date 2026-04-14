"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineKafkaSource = void 0;
/**
 * The `kafka` source ingests data from Apache Kafka topics.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineKafkaSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineKafkaSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineKafkaSource = ObservabilityPipelineKafkaSource;
/**
 * @ignore
 */
ObservabilityPipelineKafkaSource.attributeTypeMap = {
    bootstrapServersKey: {
        baseName: "bootstrap_servers_key",
        type: "string",
    },
    groupId: {
        baseName: "group_id",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    librdkafkaOptions: {
        baseName: "librdkafka_options",
        type: "Array<ObservabilityPipelineKafkaLibrdkafkaOption>",
    },
    sasl: {
        baseName: "sasl",
        type: "ObservabilityPipelineKafkaSasl",
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    topics: {
        baseName: "topics",
        type: "Array<string>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineKafkaSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineKafkaSource.js.map