"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineCrowdStrikeNextGenSiemDestination = void 0;
/**
 * The `crowdstrike_next_gen_siem` destination forwards logs to CrowdStrike Next Gen SIEM.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineCrowdStrikeNextGenSiemDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineCrowdStrikeNextGenSiemDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineCrowdStrikeNextGenSiemDestination = ObservabilityPipelineCrowdStrikeNextGenSiemDestination;
/**
 * @ignore
 */
ObservabilityPipelineCrowdStrikeNextGenSiemDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    compression: {
        baseName: "compression",
        type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding",
        required: true,
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
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    tokenKey: {
        baseName: "token_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineCrowdStrikeNextGenSiemDestination.js.map