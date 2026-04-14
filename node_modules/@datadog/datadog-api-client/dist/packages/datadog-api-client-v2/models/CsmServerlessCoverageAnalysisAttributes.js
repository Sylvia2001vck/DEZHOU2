"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmServerlessCoverageAnalysisAttributes = void 0;
/**
 * CSM Serverless Resources Coverage Analysis attributes.
 */
class CsmServerlessCoverageAnalysisAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmServerlessCoverageAnalysisAttributes.attributeTypeMap;
    }
}
exports.CsmServerlessCoverageAnalysisAttributes = CsmServerlessCoverageAnalysisAttributes;
/**
 * @ignore
 */
CsmServerlessCoverageAnalysisAttributes.attributeTypeMap = {
    cwsCoverage: {
        baseName: "cws_coverage",
        type: "CsmCoverageAnalysis",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    totalCoverage: {
        baseName: "total_coverage",
        type: "CsmCoverageAnalysis",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmServerlessCoverageAnalysisAttributes.js.map