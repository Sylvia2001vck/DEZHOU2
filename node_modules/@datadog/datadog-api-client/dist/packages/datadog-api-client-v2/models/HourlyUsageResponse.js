"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageResponse = void 0;
/**
 * Hourly usage response.
 */
class HourlyUsageResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageResponse.attributeTypeMap;
    }
}
exports.HourlyUsageResponse = HourlyUsageResponse;
/**
 * @ignore
 */
HourlyUsageResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<HourlyUsage>",
    },
    meta: {
        baseName: "meta",
        type: "HourlyUsageMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageResponse.js.map