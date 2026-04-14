"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPatchData = void 0;
/**
 * Google Cloud Usage Cost config patch data.
 */
class GCPUsageCostConfigPatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPatchData.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPatchData = GCPUsageCostConfigPatchData;
/**
 * @ignore
 */
GCPUsageCostConfigPatchData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPUsageCostConfigPatchRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GCPUsageCostConfigPatchRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPatchData.js.map