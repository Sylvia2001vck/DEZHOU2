"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineConfigProcessorGroup = void 0;
/**
 * A group of processors.
 */
class ObservabilityPipelineConfigProcessorGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineConfigProcessorGroup.attributeTypeMap;
    }
}
exports.ObservabilityPipelineConfigProcessorGroup = ObservabilityPipelineConfigProcessorGroup;
/**
 * @ignore
 */
ObservabilityPipelineConfigProcessorGroup.attributeTypeMap = {
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
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    processors: {
        baseName: "processors",
        type: "Array<ObservabilityPipelineConfigProcessorItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineConfigProcessorGroup.js.map