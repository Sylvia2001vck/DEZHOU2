"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSyslogNgSource = void 0;
/**
 * The `syslog_ng` source listens for logs over TCP or UDP from a `syslog-ng` server using the syslog protocol.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSyslogNgSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSyslogNgSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSyslogNgSource = ObservabilityPipelineSyslogNgSource;
/**
 * @ignore
 */
ObservabilityPipelineSyslogNgSource.attributeTypeMap = {
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
        type: "ObservabilityPipelineSyslogNgSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSyslogNgSource.js.map