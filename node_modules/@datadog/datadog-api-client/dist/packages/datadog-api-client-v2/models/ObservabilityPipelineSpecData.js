"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSpecData = void 0;
/**
 * Contains the the pipeline configuration.
 */
class ObservabilityPipelineSpecData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSpecData.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSpecData = ObservabilityPipelineSpecData;
/**
 * @ignore
 */
ObservabilityPipelineSpecData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ObservabilityPipelineDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSpecData.js.map