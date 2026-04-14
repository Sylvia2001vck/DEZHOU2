"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectDataRequest = void 0;
/**
 * Data object for creating an LLM Observability project.
 */
class LLMObsProjectDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectDataRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectDataRequest = LLMObsProjectDataRequest;
/**
 * @ignore
 */
LLMObsProjectDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsProjectDataAttributesRequest",
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
//# sourceMappingURL=LLMObsProjectDataRequest.js.map