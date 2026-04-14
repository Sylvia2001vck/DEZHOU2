"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSource = void 0;
/**
 * The `socket` source ingests logs over TCP or UDP.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSocketSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSource = ObservabilityPipelineSocketSource;
/**
 * @ignore
 */
ObservabilityPipelineSocketSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    framing: {
        baseName: "framing",
        type: "ObservabilityPipelineSocketSourceFraming",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    mode: {
        baseName: "mode",
        type: "ObservabilityPipelineSocketSourceMode",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSocketSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSource.js.map