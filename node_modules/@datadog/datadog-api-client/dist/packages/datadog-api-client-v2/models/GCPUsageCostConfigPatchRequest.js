"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPatchRequest = void 0;
/**
 * Google Cloud Usage Cost config patch request.
 */
class GCPUsageCostConfigPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPatchRequest.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPatchRequest = GCPUsageCostConfigPatchRequest;
/**
 * @ignore
 */
GCPUsageCostConfigPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPUsageCostConfigPatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPatchRequest.js.map