"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigResponse = void 0;
/**
 * Response of Google Cloud Usage Cost config.
 */
class GCPUsageCostConfigResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigResponse.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigResponse = GCPUsageCostConfigResponse;
/**
 * @ignore
 */
GCPUsageCostConfigResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPUsageCostConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigResponse.js.map