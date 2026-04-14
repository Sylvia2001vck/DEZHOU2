"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordItem = void 0;
/**
 * A single record to append to an LLM Observability dataset.
 */
class LLMObsDatasetRecordItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordItem.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordItem = LLMObsDatasetRecordItem;
/**
 * @ignore
 */
LLMObsDatasetRecordItem.attributeTypeMap = {
    expectedOutput: {
        baseName: "expected_output",
        type: "AnyValue",
    },
    input: {
        baseName: "input",
        type: "AnyValue",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: any; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordItem.js.map