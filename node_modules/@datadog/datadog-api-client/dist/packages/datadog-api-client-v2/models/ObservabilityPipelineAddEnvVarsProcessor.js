"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAddEnvVarsProcessor = void 0;
/**
 * The `add_env_vars` processor adds environment variable values to log events.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAddEnvVarsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAddEnvVarsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAddEnvVarsProcessor = ObservabilityPipelineAddEnvVarsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineAddEnvVarsProcessor.attributeTypeMap = {
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
        type: "ObservabilityPipelineAddEnvVarsProcessorType",
        required: true,
    },
    variables: {
        baseName: "variables",
        type: "Array<ObservabilityPipelineAddEnvVarsProcessorVariable>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAddEnvVarsProcessor.js.map