"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSummariesMeta = void 0;
/**
 * Response metadata object.
 */
class ProcessSummariesMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessSummariesMeta.attributeTypeMap;
    }
}
exports.ProcessSummariesMeta = ProcessSummariesMeta;
/**
 * @ignore
 */
ProcessSummariesMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ProcessSummariesMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessSummariesMeta.js.map