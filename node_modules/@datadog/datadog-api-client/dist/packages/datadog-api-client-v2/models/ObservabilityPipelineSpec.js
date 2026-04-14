"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSpec = void 0;
/**
 * Input schema representing an observability pipeline configuration. Used in create and validate requests.
 */
class ObservabilityPipelineSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSpec.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSpec = ObservabilityPipelineSpec;
/**
 * @ignore
 */
ObservabilityPipelineSpec.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ObservabilityPipelineSpecData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSpec.js.map