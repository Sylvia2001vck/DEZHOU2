"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsage = void 0;
/**
 * Hourly usage for a product family for an org.
 */
class HourlyUsage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsage.attributeTypeMap;
    }
}
exports.HourlyUsage = HourlyUsage;
/**
 * @ignore
 */
HourlyUsage.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "HourlyUsageAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsageTimeSeriesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsage.js.map