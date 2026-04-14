"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOpentelemetrySource = void 0;
/**
 * The `opentelemetry` source receives telemetry data using the OpenTelemetry Protocol (OTLP) over gRPC and HTTP.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineOpentelemetrySource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOpentelemetrySource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOpentelemetrySource = ObservabilityPipelineOpentelemetrySource;
/**
 * @ignore
 */
ObservabilityPipelineOpentelemetrySource.attributeTypeMap = {
    grpcAddressKey: {
        baseName: "grpc_address_key",
        type: "string",
    },
    httpAddressKey: {
        baseName: "http_address_key",
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
        type: "ObservabilityPipelineOpentelemetrySourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOpentelemetrySource.js.map