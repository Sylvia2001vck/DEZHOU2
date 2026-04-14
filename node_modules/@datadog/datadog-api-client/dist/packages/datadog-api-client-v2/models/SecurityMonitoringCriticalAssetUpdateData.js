"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAssetUpdateData = void 0;
/**
 * The new critical asset properties; partial updates are supported.
 */
class SecurityMonitoringCriticalAssetUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAssetUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAssetUpdateData = SecurityMonitoringCriticalAssetUpdateData;
/**
 * @ignore
 */
SecurityMonitoringCriticalAssetUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringCriticalAssetUpdateAttributes",
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
//# sourceMappingURL=SecurityMonitoringCriticalAssetUpdateData.js.map