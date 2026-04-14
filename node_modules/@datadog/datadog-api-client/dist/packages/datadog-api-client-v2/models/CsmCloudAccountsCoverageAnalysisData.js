"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmCloudAccountsCoverageAnalysisData = void 0;
/**
 * CSM Cloud Accounts Coverage Analysis data.
 */
class CsmCloudAccountsCoverageAnalysisData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmCloudAccountsCoverageAnalysisData.attributeTypeMap;
    }
}
exports.CsmCloudAccountsCoverageAnalysisData = CsmCloudAccountsCoverageAnalysisData;
/**
 * @ignore
 */
CsmCloudAccountsCoverageAnalysisData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CsmCloudAccountsCoverageAnalysisAttributes",
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
//# sourceMappingURL=CsmCloudAccountsCoverageAnalysisData.js.map