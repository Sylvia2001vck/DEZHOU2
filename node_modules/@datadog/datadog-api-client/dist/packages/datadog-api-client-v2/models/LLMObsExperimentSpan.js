"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentSpan = void 0;
/**
 * A span associated with an LLM Observability experiment.
 */
class LLMObsExperimentSpan {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentSpan.attributeTypeMap;
    }
}
exports.LLMObsExperimentSpan = LLMObsExperimentSpan;
/**
 * @ignore
 */
LLMObsExperimentSpan.attributeTypeMap = {
    datasetId: {
        baseName: "dataset_id",
        type: "string",
        required: true,
    },
    duration: {
        baseName: "duration",
        type: "number",
        required: true,
        format: "int64",
    },
    meta: {
        baseName: "meta",
        type: "LLMObsExperimentSpanMeta",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    projectId: {
        baseName: "project_id",
        type: "string",
        required: true,
    },
    spanId: {
        baseName: "span_id",
        type: "string",
        required: true,
    },
    startNs: {
        baseName: "start_ns",
        type: "number",
        required: true,
        format: "int64",
    },
    status: {
        baseName: "status",
        type: "LLMObsExperimentSpanStatus",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    traceId: {
        baseName: "trace_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentSpan.js.map