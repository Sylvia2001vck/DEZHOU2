"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPipelinesResponse = void 0;
/**
 * Represents the response payload containing a list of pipelines and associated metadata.
 */
class ListPipelinesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListPipelinesResponse.attributeTypeMap;
    }
}
exports.ListPipelinesResponse = ListPipelinesResponse;
/**
 * @ignore
 */
ListPipelinesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ObservabilityPipelineData>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "ListPipelinesResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListPipelinesResponse.js.map