"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetCreateRequest = void 0;
/**
 * Request object that includes the critical asset that you would like to create.
 */
class SecurityMonitoringCriticalAssetCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetCreateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetCreateRequest = SecurityMonitoringCriticalAssetCreateRequest;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringCriticalAssetCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetCreateRequest.js.map