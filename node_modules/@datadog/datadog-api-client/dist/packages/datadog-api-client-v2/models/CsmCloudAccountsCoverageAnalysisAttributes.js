"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmCloudAccountsCoverageAnalysisAttributes = void 0;
/**
 * CSM Cloud Accounts Coverage Analysis attributes.
 */
class CsmCloudAccountsCoverageAnalysisAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmCloudAccountsCoverageAnalysisAttributes.attributeTypeMap;
    }
}
exports.CsmCloudAccountsCoverageAnalysisAttributes = CsmCloudAccountsCoverageAnalysisAttributes;
/**
 * @ignore
 */
CsmCloudAccountsCoverageAnalysisAttributes.attributeTypeMap = {
    awsCoverage: {
        baseName: "aws_coverage",
        type: "CsmCoverageAnalysis",
    },
    azureCoverage: {
        baseName: "azure_coverage",
        type: "CsmCoverageAnalysis",
    },
    gcpCoverage: {
        baseName: "gcp_coverage",
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
//# sourceMappingURL=CsmCloudAccountsCoverageAnalysisAttributes.js.map