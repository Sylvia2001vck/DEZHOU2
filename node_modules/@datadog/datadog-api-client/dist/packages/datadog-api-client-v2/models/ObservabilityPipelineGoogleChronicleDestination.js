"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGoogleChronicleDestination = void 0;
/**
 * The `google_chronicle` destination sends logs to Google Chronicle.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineGoogleChronicleDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGoogleChronicleDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGoogleChronicleDestination = ObservabilityPipelineGoogleChronicleDestination;
/**
 * @ignore
 */
ObservabilityPipelineGoogleChronicleDestination.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineGcpAuth",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    customerId: {
        baseName: "customer_id",
        type: "string",
        required: true,
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineGoogleChronicleDestinationEncoding",
    },
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
    logType: {
        baseName: "log_type",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineGoogleChronicleDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGoogleChronicleDestination.js.map