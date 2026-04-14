"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetUpdateDataRequest = void 0;
/**
 * Data object for updating an LLM Observability dataset.
 */
class LLMObsDatasetUpdateDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetUpdateDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetUpdateDataRequest = LLMObsDatasetUpdateDataRequest;
/**
 * @ignore
 */
LLMObsDatasetUpdateDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDatasetUpdateDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDatasetUpdateDataRequest.js.map