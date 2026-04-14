"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectResponse = void 0;
/**
 * Response containing a single LLM Observability project.
 */
class LLMObsProjectResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectResponse.attributeTypeMap;
    }
}
exports.LLMObsProjectResponse = LLMObsProjectResponse;
/**
 * @ignore
 */
LLMObsProjectResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsProjectDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsProjectResponse.js.map