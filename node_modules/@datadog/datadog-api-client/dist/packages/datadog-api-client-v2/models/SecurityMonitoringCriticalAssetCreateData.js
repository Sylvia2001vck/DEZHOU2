"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetCreateData = void 0;
/**
 * Object for a single critical asset.
 */
class SecurityMonitoringCriticalAssetCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetCreateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetCreateData = SecurityMonitoringCriticalAssetCreateData;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringCriticalAssetCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringCriticalAssetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAssetCreateData.js.map