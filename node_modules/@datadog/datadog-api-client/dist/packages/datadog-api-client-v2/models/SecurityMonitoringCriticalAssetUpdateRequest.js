"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetUpdateRequest = void 0;
/**
 * Request object containing the fields to update on the critical asset.
 */
class SecurityMonitoringCriticalAssetUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetUpdateRequest = SecurityMonitoringCriticalAssetUpdateRequest;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringCriticalAssetUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetUpdateRequest.js.map