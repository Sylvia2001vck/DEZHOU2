"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineCloudPremDestination = void 0;
/**
 * The `cloud_prem` destination sends logs to Datadog CloudPrem.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineCloudPremDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineCloudPremDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineCloudPremDestination = ObservabilityPipelineCloudPremDestination;
/**
 * @ignore
 */
ObservabilityPipelineCloudPremDestination.attributeTypeMap = {
    endpointUrlKey: {
        baseName: "endpoint_url_key",
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineCloudPremDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineCloudPremDestination.js.map