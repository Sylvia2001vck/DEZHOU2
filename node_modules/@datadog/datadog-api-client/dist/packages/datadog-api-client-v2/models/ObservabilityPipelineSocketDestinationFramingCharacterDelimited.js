"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketDestinationFramingCharacterDelimited = void 0;
/**
 * Each log event is separated using the specified delimiter character.
 */
class ObservabilityPipelineSocketDestinationFramingCharacterDelimited {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketDestinationFramingCharacterDelimited.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketDestinationFramingCharacterDelimited = ObservabilityPipelineSocketDestinationFramingCharacterDelimited;
/**
 * @ignore
 */
ObservabilityPipelineSocketDestinationFramingCharacterDelimited.attributeTypeMap = {
    delimiter: {
        baseName: "delimiter",
        type: "string",
        required: true,
    },
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketDestinationFramingCharacterDelimited.js.map