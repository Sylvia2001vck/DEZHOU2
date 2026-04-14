"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigsResponse = void 0;
/**
 * List of Google Cloud Usage Cost configs.
 */
class GCPUsageCostConfigsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigsResponse.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigsResponse = GCPUsageCostConfigsResponse;
/**
 * @ignore
 */
GCPUsageCostConfigsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<GCPUsageCostConfig>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigsResponse.js.map