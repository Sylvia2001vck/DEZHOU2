"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSumoLogicDestination = void 0;
/**
 * The `sumo_logic` destination forwards logs to Sumo Logic.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSumoLogicDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSumoLogicDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSumoLogicDestination = ObservabilityPipelineSumoLogicDestination;
/**
 * @ignore
 */
ObservabilityPipelineSumoLogicDestination.attributeTypeMap = {
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineSumoLogicDestinationEncoding",
    },
    endpointUrlKey: {
        baseName: "endpoint_url_key",
        type: "string",
    },
    headerCustomFields: {
        baseName: "header_custom_fields",
        type: "Array<ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem>",
    },
    headerHostName: {
        baseName: "header_host_name",
        type: "string",
    },
    headerSourceCategory: {
        baseName: "header_source_category",
        type: "string",
    },
    headerSourceName: {
        baseName: "header_source_name",
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSumoLogicDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSumoLogicDestination.js.map