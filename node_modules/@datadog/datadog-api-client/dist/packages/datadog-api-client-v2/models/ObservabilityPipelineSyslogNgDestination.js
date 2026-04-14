"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSyslogNgDestination = void 0;
/**
 * The `syslog_ng` destination forwards logs to an external `syslog-ng` server over TCP or UDP using the syslog protocol.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSyslogNgDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSyslogNgDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSyslogNgDestination = ObservabilityPipelineSyslogNgDestination;
/**
 * @ignore
 */
ObservabilityPipelineSyslogNgDestination.attributeTypeMap = {
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
        type: "ObservabilityPipelineSyslogNgDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSyslogNgDestination.js.map