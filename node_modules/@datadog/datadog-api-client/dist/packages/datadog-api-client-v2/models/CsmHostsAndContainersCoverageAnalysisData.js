"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmHostsAndContainersCoverageAnalysisData = void 0;
/**
 * CSM Hosts and Containers Coverage Analysis data.
 */
class CsmHostsAndContainersCoverageAnalysisData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmHostsAndContainersCoverageAnalysisData.attributeTypeMap;
    }
}
exports.CsmHostsAndContainersCoverageAnalysisData = CsmHostsAndContainersCoverageAnalysisData;
/**
 * @ignore
 */
CsmHostsAndContainersCoverageAnalysisData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CsmHostsAndContainersCoverageAnalysisAttributes",
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
//# sourceMappingURL=CsmHostsAndContainersCoverageAnalysisData.js.map