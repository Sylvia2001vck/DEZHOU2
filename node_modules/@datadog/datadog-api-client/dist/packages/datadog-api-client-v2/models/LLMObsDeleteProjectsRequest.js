"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteProjectsRequest = void 0;
/**
 * Request to delete one or more LLM Observability projects.
 */
class LLMObsDeleteProjectsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteProjectsRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteProjectsRequest = LLMObsDeleteProjectsRequest;
/**
 * @ignore
 */
LLMObsDeleteProjectsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDeleteProjectsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteProjectsRequest.js.map