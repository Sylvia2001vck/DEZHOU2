"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetResponse = void 0;
/**
 * Response object containing a single critical asset.
 */
class SecurityMonitoringCriticalAssetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetResponse = SecurityMonitoringCriticalAssetResponse;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringCriticalAsset",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetResponse.js.map