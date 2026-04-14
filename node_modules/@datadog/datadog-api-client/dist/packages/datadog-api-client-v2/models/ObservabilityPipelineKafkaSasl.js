"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineKafkaSasl = void 0;
/**
 * Specifies the SASL mechanism for authenticating with a Kafka cluster.
 */
class ObservabilityPipelineKafkaSasl {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineKafkaSasl.attributeTypeMap;
    }
}
exports.ObservabilityPipelineKafkaSasl = ObservabilityPipelineKafkaSasl;
/**
 * @ignore
 */
ObservabilityPipelineKafkaSasl.attributeTypeMap = {
    mechanism: {
        baseName: "mechanism",
        type: "ObservabilityPipelineKafkaSaslMechanism",
    },
    passwordKey: {
        baseName: "password_key",
        type: "string",
    },
    usernameKey: {
        baseName: "username_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineKafkaSasl.js.map