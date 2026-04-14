"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftSentinelDestination = void 0;
/**
 * The `microsoft_sentinel` destination forwards logs to Microsoft Sentinel.
 *
 * **Supported pipeline types:** logs
 */
class MicrosoftSentinelDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftSentinelDestination.attributeTypeMap;
    }
}
exports.MicrosoftSentinelDestination = MicrosoftSentinelDestination;
/**
 * @ignore
 */
MicrosoftSentinelDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    clientId: {
        baseName: "client_id",
        type: "string",
        required: true,
    },
    clientSecretKey: {
        baseName: "client_secret_key",
        type: "string",
    },
    dceUriKey: {
        baseName: "dce_uri_key",
        type: "string",
    },
    dcrImmutableId: {
        baseName: "dcr_immutable_id",
        type: "string",
        required: true,
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
    table: {
        baseName: "table",
        type: "string",
        required: true,
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MicrosoftSentinelDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftSentinelDestination.js.map