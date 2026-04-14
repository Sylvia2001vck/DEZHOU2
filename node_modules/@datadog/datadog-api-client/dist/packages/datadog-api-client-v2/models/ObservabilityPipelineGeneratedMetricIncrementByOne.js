"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGeneratedMetricIncrementByOne = void 0;
/**
 * Strategy that increments a generated metric by one for each matching event.
 */
class ObservabilityPipelineGeneratedMetricIncrementByOne {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGeneratedMetricIncrementByOne.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGeneratedMetricIncrementByOne = ObservabilityPipelineGeneratedMetricIncrementByOne;
/**
 * @ignore
 */
ObservabilityPipelineGeneratedMetricIncrementByOne.attributeTypeMap = {
    strategy: {
        baseName: "strategy",
        type: "ObservabilityPipelineGeneratedMetricIncrementByOneStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGeneratedMetricIncrementByOne.js.map