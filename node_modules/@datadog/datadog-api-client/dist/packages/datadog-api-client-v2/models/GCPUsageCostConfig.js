"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfig = void 0;
/**
 * Google Cloud Usage Cost config.
 */
class GCPUsageCostConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfig.attributeTypeMap;
    }
}
exports.GCPUsageCostConfig = GCPUsageCostConfig;
/**
 * @ignore
 */
GCPUsageCostConfig.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPUsageCostConfigAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GCPUsageCostConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfig.js.map