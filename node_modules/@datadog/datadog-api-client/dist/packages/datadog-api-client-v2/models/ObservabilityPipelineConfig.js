"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineConfig = void 0;
/**
 * Specifies the pipeline's configuration, including its sources, processors, and destinations.
 */
class ObservabilityPipelineConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineConfig.attributeTypeMap;
    }
}
exports.ObservabilityPipelineConfig = ObservabilityPipelineConfig;
/**
 * @ignore
 */
ObservabilityPipelineConfig.attributeTypeMap = {
    destinations: {
        baseName: "destinations",
        type: "Array<ObservabilityPipelineConfigDestinationItem>",
        required: true,
    },
    pipelineType: {
        baseName: "pipeline_type",
        type: "ObservabilityPipelineConfigPipelineType",
    },
    processorGroups: {
        baseName: "processor_groups",
        type: "Array<ObservabilityPipelineConfigProcessorGroup>",
    },
    processors: {
        baseName: "processors",
        type: "Array<ObservabilityPipelineConfigProcessorGroup>",
    },
    sources: {
        baseName: "sources",
        type: "Array<ObservabilityPipelineConfigSourceItem>",
        required: true,
    },
    useLegacySearchSyntax: {
        baseName: "use_legacy_search_syntax",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineConfig.js.map