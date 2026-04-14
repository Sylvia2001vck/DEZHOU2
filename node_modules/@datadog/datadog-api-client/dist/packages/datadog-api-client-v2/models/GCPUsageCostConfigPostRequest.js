"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPostRequest = void 0;
/**
 * Google Cloud Usage Cost config post request.
 */
class GCPUsageCostConfigPostRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPostRequest.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPostRequest = GCPUsageCostConfigPostRequest;
/**
 * @ignore
 */
GCPUsageCostConfigPostRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPUsageCostConfigPostData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPostRequest.js.map