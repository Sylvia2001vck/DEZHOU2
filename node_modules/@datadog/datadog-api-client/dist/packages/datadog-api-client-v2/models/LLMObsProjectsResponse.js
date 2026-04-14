"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectsResponse = void 0;
/**
 * Response containing a list of LLM Observability projects.
 */
class LLMObsProjectsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectsResponse.attributeTypeMap;
    }
}
exports.LLMObsProjectsResponse = LLMObsProjectsResponse;
/**
 * @ignore
 */
LLMObsProjectsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LLMObsProjectDataResponse>",
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
//# sourceMappingURL=LLMObsProjectsResponse.js.map