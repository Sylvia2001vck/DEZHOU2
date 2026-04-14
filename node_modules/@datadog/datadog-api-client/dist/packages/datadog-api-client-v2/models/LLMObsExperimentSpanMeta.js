"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentSpanMeta = void 0;
/**
 * Metadata associated with an experiment span.
 */
class LLMObsExperimentSpanMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentSpanMeta.attributeTypeMap;
    }
}
exports.LLMObsExperimentSpanMeta = LLMObsExperimentSpanMeta;
/**
 * @ignore
 */
LLMObsExperimentSpanMeta.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "LLMObsExperimentSpanError",
    },
    expectedOutput: {
        baseName: "expected_output",
        type: "{ [key: string]: any; }",
    },
    input: {
        baseName: "input",
        type: "AnyValue",
    },
    output: {
        baseName: "output",
        type: "AnyValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentSpanMeta.js.map