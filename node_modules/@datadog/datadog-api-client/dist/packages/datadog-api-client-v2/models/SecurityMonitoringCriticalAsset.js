"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringCriticalAsset = void 0;
/**
 * The critical asset's properties.
 */
class SecurityMonitoringCriticalAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringCriticalAsset.attributeTypeMap;
    }
}
exports.SecurityMonitoringCriticalAsset = SecurityMonitoringCriticalAsset;
/**
 * @ignore
 */
SecurityMonitoringCriticalAsset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringCriticalAssetAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringCriticalAssetType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringCriticalAsset.js.map