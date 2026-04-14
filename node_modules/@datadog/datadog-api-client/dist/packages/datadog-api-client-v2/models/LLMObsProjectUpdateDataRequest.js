"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectUpdateDataRequest = void 0;
/**
 * Data object for updating an LLM Observability project.
 */
class LLMObsProjectUpdateDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectUpdateDataRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectUpdateDataRequest = LLMObsProjectUpdateDataRequest;
/**
 * @ignore
 */
LLMObsProjectUpdateDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsProjectUpdateDataAttributesRequest",
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
//# sourceMappingURL=LLMObsProjectUpdateDataRequest.js.map