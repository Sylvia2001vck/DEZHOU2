"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetsResponse = void 0;
/**
 * Response containing a list of LLM Observability datasets.
 */
class LLMObsDatasetsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetsResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetsResponse = LLMObsDatasetsResponse;
/**
 * @ignore
 */
LLMObsDatasetsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LLMObsDatasetDataResponse>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "LLMObsCursorMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetsResponse.js.map