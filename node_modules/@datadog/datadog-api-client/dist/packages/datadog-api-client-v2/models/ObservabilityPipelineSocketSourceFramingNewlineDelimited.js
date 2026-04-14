"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSourceFramingNewlineDelimited = void 0;
/**
 * Byte frames which are delimited by a newline character.
 */
class ObservabilityPipelineSocketSourceFramingNewlineDelimited {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSourceFramingNewlineDelimited.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSourceFramingNewlineDelimited = ObservabilityPipelineSocketSourceFramingNewlineDelimited;
/**
 * @ignore
 */
ObservabilityPipelineSocketSourceFramingNewlineDelimited.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSourceFramingNewlineDelimited.js.map