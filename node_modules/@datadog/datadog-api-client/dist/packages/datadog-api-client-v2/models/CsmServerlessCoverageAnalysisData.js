"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmServerlessCoverageAnalysisData = void 0;
/**
 * CSM Serverless Resources Coverage Analysis data.
 */
class CsmServerlessCoverageAnalysisData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmServerlessCoverageAnalysisData.attributeTypeMap;
    }
}
exports.CsmServerlessCoverageAnalysisData = CsmServerlessCoverageAnalysisData;
/**
 * @ignore
 */
CsmServerlessCoverageAnalysisData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CsmServerlessCoverageAnalysisAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmServerlessCoverageAnalysisData.js.map