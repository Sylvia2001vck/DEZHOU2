"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectDataResponse = void 0;
/**
 * Data object for an LLM Observability project.
 */
class LLMObsProjectDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectDataResponse.attributeTypeMap;
    }
}
exports.LLMObsProjectDataResponse = LLMObsProjectDataResponse;
/**
 * @ignore
 */
LLMObsProjectDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsProjectDataAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=LLMObsProjectDataResponse.js.map