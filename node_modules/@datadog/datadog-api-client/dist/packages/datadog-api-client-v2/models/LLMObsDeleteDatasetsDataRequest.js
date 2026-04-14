"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetsDataRequest = void 0;
/**
 * Data object for deleting LLM Observability datasets.
 */
class LLMObsDeleteDatasetsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetsDataRequest = LLMObsDeleteDatasetsDataRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDeleteDatasetsDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDeleteDatasetsDataRequest.js.map