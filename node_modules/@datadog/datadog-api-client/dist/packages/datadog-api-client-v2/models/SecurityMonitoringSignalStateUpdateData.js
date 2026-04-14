"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalStateUpdateData = void 0;
/**
 * Data containing the patch for changing the state of a signal.
 */
class SecurityMonitoringSignalStateUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalStateUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalStateUpdateData = SecurityMonitoringSignalStateUpdateData;
/**
 * @ignore
 */
SecurityMonitoringSignalStateUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSignalStateUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "any",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSignalMetadataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalStateUpdateData.js.map