"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineKafkaLibrdkafkaOption = void 0;
/**
 * Represents a key-value pair used to configure low-level `librdkafka` client options for Kafka source and destination, such as timeouts, buffer sizes, and security settings.
 */
class ObservabilityPipelineKafkaLibrdkafkaOption {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineKafkaLibrdkafkaOption.attributeTypeMap;
    }
}
exports.ObservabilityPipelineKafkaLibrdkafkaOption = ObservabilityPipelineKafkaLibrdkafkaOption;
/**
 * @ignore
 */
ObservabilityPipelineKafkaLibrdkafkaOption.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineKafkaLibrdkafkaOption.js.map