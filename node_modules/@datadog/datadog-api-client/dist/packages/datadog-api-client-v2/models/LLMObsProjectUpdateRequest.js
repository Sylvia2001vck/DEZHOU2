"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectUpdateRequest = void 0;
/**
 * Request to partially update an LLM Observability project.
 */
class LLMObsProjectUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectUpdateRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectUpdateRequest = LLMObsProjectUpdateRequest;
/**
 * @ignore
 */
LLMObsProjectUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsProjectUpdateDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsProjectUpdateRequest.js.map