"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGeneratedMetricIncrementByField = void 0;
/**
 * Strategy that increments a generated metric based on the value of a log field.
 */
class ObservabilityPipelineGeneratedMetricIncrementByField {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGeneratedMetricIncrementByField.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGeneratedMetricIncrementByField = ObservabilityPipelineGeneratedMetricIncrementByField;
/**
 * @ignore
 */
ObservabilityPipelineGeneratedMetricIncrementByField.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
        required: true,
    },
    strategy: {
        baseName: "strategy",
        type: "ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGeneratedMetricIncrementByField.js.map