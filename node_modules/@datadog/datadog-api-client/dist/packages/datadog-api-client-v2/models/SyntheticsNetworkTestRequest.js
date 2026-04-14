"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestRequest = void 0;
/**
 * Object describing the request for a Network Path test.
 */
class SyntheticsNetworkTestRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestRequest.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestRequest = SyntheticsNetworkTestRequest;
/**
 * @ignore
 */
SyntheticsNetworkTestRequest.attributeTypeMap = {
    destinationService: {
        baseName: "destination_service",
        type: "string",
    },
    e2eQueries: {
        baseName: "e2e_queries",
        type: "number",
        required: true,
        format: "int64",
    },
    host: {
        baseName: "host",
        type: "string",
        required: true,
    },
    maxTtl: {
        baseName: "max_ttl",
        type: "number",
        required: true,
        format: "int64",
    },
    port: {
        baseName: "port",
        type: "number",
        format: "int64",
    },
    sourceService: {
        baseName: "source_service",
        type: "string",
    },
    tcpMethod: {
        baseName: "tcp_method",
        type: "SyntheticsNetworkTestRequestTCPMethod",
    },
    timeout: {
        baseName: "timeout",
        type: "number",
        format: "int64",
    },
    tracerouteQueries: {
        baseName: "traceroute_queries",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestRequest.js.map