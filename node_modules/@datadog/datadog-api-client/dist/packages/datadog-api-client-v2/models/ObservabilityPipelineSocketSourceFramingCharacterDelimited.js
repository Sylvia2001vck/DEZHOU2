"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSourceFramingCharacterDelimited = void 0;
/**
 * Byte frames which are delimited by a chosen character.
 */
class ObservabilityPipelineSocketSourceFramingCharacterDelimited {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSourceFramingCharacterDelimited.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSourceFramingCharacterDelimited = ObservabilityPipelineSocketSourceFramingCharacterDelimited;
/**
 * @ignore
 */
ObservabilityPipelineSocketSourceFramingCharacterDelimited.attributeTypeMap = {
    delimiter: {
        baseName: "delimiter",
        type: "string",
        required: true,
    },
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSourceFramingCharacterDelimited.js.map