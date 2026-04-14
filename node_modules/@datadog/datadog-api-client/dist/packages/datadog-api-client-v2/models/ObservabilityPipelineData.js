"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineData = void 0;
/**
 * Contains the pipeline’s ID, type, and configuration attributes.
 */
class ObservabilityPipelineData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineData.attributeTypeMap;
    }
}
exports.ObservabilityPipelineData = ObservabilityPipelineData;
/**
 * @ignore
 */
ObservabilityPipelineData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ObservabilityPipelineDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ObservabilityPipelineData.js.map