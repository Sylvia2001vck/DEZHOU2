"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineRsyslogDestination = void 0;
/**
 * The `rsyslog` destination forwards logs to an external `rsyslog` server over TCP or UDP using the syslog protocol.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineRsyslogDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineRsyslogDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineRsyslogDestination = ObservabilityPipelineRsyslogDestination;
/**
 * @ignore
 */
ObservabilityPipelineRsyslogDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
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
    keepalive: {
        baseName: "keepalive",
        type: "number",
        format: "int64",
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineRsyslogDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineRsyslogDestination.js.map