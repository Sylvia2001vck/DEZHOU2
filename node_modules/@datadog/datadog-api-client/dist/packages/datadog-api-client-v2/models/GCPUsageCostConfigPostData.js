"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPostData = void 0;
/**
 * Google Cloud Usage Cost config post data.
 */
class GCPUsageCostConfigPostData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPostData.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPostData = GCPUsageCostConfigPostData;
/**
 * @ignore
 */
GCPUsageCostConfigPostData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPUsageCostConfigPostRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "GCPUsageCostConfigPostRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPostData.js.map