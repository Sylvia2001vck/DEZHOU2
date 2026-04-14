"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineNewRelicDestination = void 0;
/**
 * The `new_relic` destination sends logs to the New Relic platform.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineNewRelicDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineNewRelicDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineNewRelicDestination = ObservabilityPipelineNewRelicDestination;
/**
 * @ignore
 */
ObservabilityPipelineNewRelicDestination.attributeTypeMap = {
    accountIdKey: {
        baseName: "account_id_key",
        type: "string",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
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
    licenseKeyKey: {
        baseName: "license_key_key",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "ObservabilityPipelineNewRelicDestinationRegion",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineNewRelicDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineNewRelicDestination.js.map