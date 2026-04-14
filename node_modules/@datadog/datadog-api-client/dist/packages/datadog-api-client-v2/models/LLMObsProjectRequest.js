"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectRequest = void 0;
/**
 * Request to create an LLM Observability project.
 */
class LLMObsProjectRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectRequest = LLMObsProjectRequest;
/**
 * @ignore
 */
LLMObsProjectRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsProjectDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsProjectRequest.js.map