"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetDataResponse = void 0;
/**
 * Data object for an LLM Observability dataset.
 */
class LLMObsDatasetDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetDataResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetDataResponse = LLMObsDatasetDataResponse;
/**
 * @ignore
 */
LLMObsDatasetDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDatasetDataAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LLMObsDatasetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetDataResponse.js.map