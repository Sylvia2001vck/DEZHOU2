"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDatadogAgentSource = void 0;
/**
 * The `datadog_agent` source collects logs/metrics from the Datadog Agent.
 *
 * **Supported pipeline types:** logs, metrics
 */
class ObservabilityPipelineDatadogAgentSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDatadogAgentSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDatadogAgentSource = ObservabilityPipelineDatadogAgentSource;
/**
 * @ignore
 */
ObservabilityPipelineDatadogAgentSource.attributeTypeMap = {
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
        type: "ObservabilityPipelineDatadogAgentSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDatadogAgentSource.js.map