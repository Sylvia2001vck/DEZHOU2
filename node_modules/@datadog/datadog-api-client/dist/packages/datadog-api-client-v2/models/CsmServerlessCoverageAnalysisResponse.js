"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmServerlessCoverageAnalysisResponse = void 0;
/**
 * CSM Serverless Resources Coverage Analysis response.
 */
class CsmServerlessCoverageAnalysisResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmServerlessCoverageAnalysisResponse.attributeTypeMap;
    }
}
exports.CsmServerlessCoverageAnalysisResponse = CsmServerlessCoverageAnalysisResponse;
/**
 * @ignore
 */
CsmServerlessCoverageAnalysisResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CsmServerlessCoverageAnalysisData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmServerlessCoverageAnalysisResponse.js.map