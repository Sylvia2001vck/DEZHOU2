"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAddHostnameProcessor = void 0;
/**
 * The `add_hostname` processor adds the hostname to log events.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAddHostnameProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAddHostnameProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAddHostnameProcessor = ObservabilityPipelineAddHostnameProcessor;
/**
 * @ignore
 */
ObservabilityPipelineAddHostnameProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineAddHostnameProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAddHostnameProcessor.js.map