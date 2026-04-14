"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineRsyslogSource = void 0;
/**
 * The `rsyslog` source listens for logs over TCP or UDP from an `rsyslog` server using the syslog protocol.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineRsyslogSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineRsyslogSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineRsyslogSource = ObservabilityPipelineRsyslogSource;
/**
 * @ignore
 */
ObservabilityPipelineRsyslogSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    mode: {
        baseName: "mode",
        type: "ObservabilityPipelineSyslogSourceMode",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineRsyslogSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineRsyslogSource.js.map