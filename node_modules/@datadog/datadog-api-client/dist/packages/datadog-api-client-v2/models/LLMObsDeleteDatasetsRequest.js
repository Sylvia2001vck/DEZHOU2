"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetsRequest = void 0;
/**
 * Request to delete one or more LLM Observability datasets.
 */
class LLMObsDeleteDatasetsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetsRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetsRequest = LLMObsDeleteDatasetsRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDeleteDatasetsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteDatasetsRequest.js.map