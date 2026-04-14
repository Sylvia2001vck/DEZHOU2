"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmHostsAndContainersCoverageAnalysisAttributes = void 0;
/**
 * CSM Hosts and Containers Coverage Analysis attributes.
 */
class CsmHostsAndContainersCoverageAnalysisAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmHostsAndContainersCoverageAnalysisAttributes.attributeTypeMap;
    }
}
exports.CsmHostsAndContainersCoverageAnalysisAttributes = CsmHostsAndContainersCoverageAnalysisAttributes;
/**
 * @ignore
 */
CsmHostsAndContainersCoverageAnalysisAttributes.attributeTypeMap = {
    cspmCoverage: {
        baseName: "cspm_coverage",
        type: "CsmCoverageAnalysis",
    },
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
    vmCoverage: {
        baseName: "vm_coverage",
        type: "CsmCoverageAnalysis",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmHostsAndContainersCoverageAnalysisAttributes.js.map