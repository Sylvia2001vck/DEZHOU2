"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageObservabilityPipelinesResponse = void 0;
/**
 * Observability Pipelines usage response.
 */
class UsageObservabilityPipelinesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageObservabilityPipelinesResponse.attributeTypeMap;
    }
}
exports.UsageObservabilityPipelinesResponse = UsageObservabilityPipelinesResponse;
/**
 * @ignore
 */
UsageObservabilityPipelinesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UsageDataObject>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageObservabilityPipelinesResponse.js.map