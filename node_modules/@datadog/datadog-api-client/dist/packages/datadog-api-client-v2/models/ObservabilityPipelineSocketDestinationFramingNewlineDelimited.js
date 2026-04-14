"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketDestinationFramingNewlineDelimited = void 0;
/**
 * Each log event is delimited by a newline character.
 */
class ObservabilityPipelineSocketDestinationFramingNewlineDelimited {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketDestinationFramingNewlineDelimited.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketDestinationFramingNewlineDelimited = ObservabilityPipelineSocketDestinationFramingNewlineDelimited;
/**
 * @ignore
 */
ObservabilityPipelineSocketDestinationFramingNewlineDelimited.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketDestinationFramingNewlineDelimited.js.map