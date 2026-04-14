"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketDestination = void 0;
/**
 * The `socket` destination sends logs over TCP or UDP to a remote server.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSocketDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketDestination = ObservabilityPipelineSocketDestination;
/**
 * @ignore
 */
ObservabilityPipelineSocketDestination.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineSocketDestinationEncoding",
        required: true,
    },
    framing: {
        baseName: "framing",
        type: "ObservabilityPipelineSocketDestinationFraming",
        required: true,
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
    mode: {
        baseName: "mode",
        type: "ObservabilityPipelineSocketDestinationMode",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSocketDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketDestination.js.map