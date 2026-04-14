"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalStateUpdateRequest = void 0;
/**
 * Request body for changing the state of a given security monitoring signal.
 */
class SecurityMonitoringSignalStateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalStateUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalStateUpdateRequest = SecurityMonitoringSignalStateUpdateRequest;
/**
 * @ignore
 */
SecurityMonitoringSignalStateUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSignalStateUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalStateUpdateRequest.js.map