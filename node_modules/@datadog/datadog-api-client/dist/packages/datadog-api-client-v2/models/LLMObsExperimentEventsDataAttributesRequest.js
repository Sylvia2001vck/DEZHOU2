"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentEventsDataAttributesRequest = void 0;
/**
 * Attributes for pushing experiment events including spans and metrics.
 */
class LLMObsExperimentEventsDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentEventsDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentEventsDataAttributesRequest = LLMObsExperimentEventsDataAttributesRequest;
/**
 * @ignore
 */
LLMObsExperimentEventsDataAttributesRequest.attributeTypeMap = {
    metrics: {
        baseName: "metrics",
        type: "Array<LLMObsExperimentMetric>",
    },
    spans: {
        baseName: "spans",
        type: "Array<LLMObsExperimentSpan>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentEventsDataAttributesRequest.js.map