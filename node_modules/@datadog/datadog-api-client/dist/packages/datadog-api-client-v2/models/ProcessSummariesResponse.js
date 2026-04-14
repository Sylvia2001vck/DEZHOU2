"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSummariesResponse = void 0;
/**
 * List of process summaries.
 */
class ProcessSummariesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessSummariesResponse.attributeTypeMap;
    }
}
exports.ProcessSummariesResponse = ProcessSummariesResponse;
/**
 * @ignore
 */
ProcessSummariesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ProcessSummary>",
    },
    meta: {
        baseName: "meta",
        type: "ProcessSummariesMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessSummariesResponse.js.map