"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipeline = void 0;
/**
 * Top-level schema representing a pipeline.
 */
class ObservabilityPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipeline.attributeTypeMap;
    }
}
exports.ObservabilityPipeline = ObservabilityPipeline;
/**
 * @ignore
 */
ObservabilityPipeline.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ObservabilityPipelineData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipeline.js.map