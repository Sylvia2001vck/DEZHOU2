"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteProjectsDataRequest = void 0;
/**
 * Data object for deleting LLM Observability projects.
 */
class LLMObsDeleteProjectsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteProjectsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteProjectsDataRequest = LLMObsDeleteProjectsDataRequest;
/**
 * @ignore
 */
LLMObsDeleteProjectsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDeleteProjectsDataAttributesRequest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LLMObsProjectType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteProjectsDataRequest.js.map