"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentEventsDataRequest = void 0;
/**
 * Data object for pushing experiment events.
 */
class LLMObsExperimentEventsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentEventsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentEventsDataRequest = LLMObsExperimentEventsDataRequest;
/**
 * @ignore
 */
LLMObsExperimentEventsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsExperimentEventsDataAttributesRequest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LLMObsEventType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentEventsDataRequest.js.map