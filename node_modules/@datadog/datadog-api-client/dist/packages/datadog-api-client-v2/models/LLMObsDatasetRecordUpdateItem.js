"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordUpdateItem = void 0;
/**
 * A record update payload for an LLM Observability dataset.
 */
class LLMObsDatasetRecordUpdateItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordUpdateItem.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordUpdateItem = LLMObsDatasetRecordUpdateItem;
/**
 * @ignore
 */
LLMObsDatasetRecordUpdateItem.attributeTypeMap = {
    expectedOutput: {
        baseName: "expected_output",
        type: "AnyValue",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    input: {
        baseName: "input",
        type: "AnyValue",
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
//# sourceMappingURL=LLMObsDatasetRecordUpdateItem.js.map