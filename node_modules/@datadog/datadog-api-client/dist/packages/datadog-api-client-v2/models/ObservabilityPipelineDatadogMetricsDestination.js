"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDatadogMetricsDestination = void 0;
/**
 * The `datadog_metrics` destination forwards metrics to Datadog.
 *
 * **Supported pipeline types:** metrics
 */
class ObservabilityPipelineDatadogMetricsDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDatadogMetricsDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDatadogMetricsDestination = ObservabilityPipelineDatadogMetricsDestination;
/**
 * @ignore
 */
ObservabilityPipelineDatadogMetricsDestination.attributeTypeMap = {
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineDatadogMetricsDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDatadogMetricsDestination.js.map