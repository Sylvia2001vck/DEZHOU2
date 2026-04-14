"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetsResponse = void 0;
/**
 * Response object containing the available critical assets.
 */
class SecurityMonitoringCriticalAssetsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetsResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetsResponse = SecurityMonitoringCriticalAssetsResponse;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringCriticalAsset>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetsResponse.js.map