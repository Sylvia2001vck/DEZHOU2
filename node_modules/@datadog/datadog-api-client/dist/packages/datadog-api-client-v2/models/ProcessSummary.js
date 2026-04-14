"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSummary = void 0;
/**
 * Process summary object.
 */
class ProcessSummary {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessSummary.attributeTypeMap;
    }
}
exports.ProcessSummary = ProcessSummary;
/**
 * @ignore
 */
ProcessSummary.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProcessSummaryAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ProcessSummaryType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessSummary.js.map