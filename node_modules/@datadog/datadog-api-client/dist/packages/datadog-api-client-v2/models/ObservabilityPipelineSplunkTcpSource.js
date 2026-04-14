"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSplunkTcpSource = void 0;
/**
 * The `splunk_tcp` source receives logs from a Splunk Universal Forwarder over TCP.
 * TLS is supported for secure transmission.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSplunkTcpSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSplunkTcpSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSplunkTcpSource = ObservabilityPipelineSplunkTcpSource;
/**
 * @ignore
 */
ObservabilityPipelineSplunkTcpSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSplunkTcpSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSplunkTcpSource.js.map