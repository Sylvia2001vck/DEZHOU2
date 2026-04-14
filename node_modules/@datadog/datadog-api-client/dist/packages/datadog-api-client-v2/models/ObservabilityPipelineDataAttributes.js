"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDataAttributes = void 0;
/**
 * Defines the pipeline’s name and its components (sources, processors, and destinations).
 */
class ObservabilityPipelineDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDataAttributes.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDataAttributes = ObservabilityPipelineDataAttributes;
/**
 * @ignore
 */
ObservabilityPipelineDataAttributes.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "ObservabilityPipelineConfig",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDataAttributes.js.map