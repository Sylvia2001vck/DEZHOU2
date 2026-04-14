"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentEventsRequest = void 0;
/**
 * Request to push spans and metrics for an LLM Observability experiment.
 */
class LLMObsExperimentEventsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentEventsRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentEventsRequest = LLMObsExperimentEventsRequest;
/**
 * @ignore
 */
LLMObsExperimentEventsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsExperimentEventsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentEventsRequest.js.map