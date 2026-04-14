"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetDataRequest = void 0;
/**
 * Data object for creating an LLM Observability dataset.
 */
class LLMObsDatasetDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetDataRequest = LLMObsDatasetDataRequest;
/**
 * @ignore
 */
LLMObsDatasetDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDatasetDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDatasetDataRequest.js.map