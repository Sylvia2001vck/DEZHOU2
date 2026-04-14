"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDatadogLogsDestination = void 0;
/**
 * The `datadog_logs` destination forwards logs to Datadog Log Management.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineDatadogLogsDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDatadogLogsDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDatadogLogsDestination = ObservabilityPipelineDatadogLogsDestination;
/**
 * @ignore
 */
ObservabilityPipelineDatadogLogsDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
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
    routes: {
        baseName: "routes",
        type: "Array<ObservabilityPipelineDatadogLogsDestinationRoute>",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineDatadogLogsDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDatadogLogsDestination.js.map