"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringContentPackStateMeta = void 0;
/**
 * Metadata for content pack states
 */
class SecurityMonitoringContentPackStateMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringContentPackStateMeta.attributeTypeMap;
    }
}
exports.SecurityMonitoringContentPackStateMeta = SecurityMonitoringContentPackStateMeta;
/**
 * @ignore
 */
SecurityMonitoringContentPackStateMeta.attributeTypeMap = {
    cloudSiemIndexIncorrect: {
        baseName: "cloud_siem_index_incorrect",
        type: "boolean",
        required: true,
    },
    sku: {
        baseName: "sku",
        type: "SecurityMonitoringSKU",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringContentPackStateMeta.js.map