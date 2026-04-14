"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSplunkHecSource = void 0;
/**
 * The `splunk_hec` source implements the Splunk HTTP Event Collector (HEC) API.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSplunkHecSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSplunkHecSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSplunkHecSource = ObservabilityPipelineSplunkHecSource;
/**
 * @ignore
 */
ObservabilityPipelineSplunkHecSource.attributeTypeMap = {
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
        type: "ObservabilityPipelineSplunkHecSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSplunkHecSource.js.map