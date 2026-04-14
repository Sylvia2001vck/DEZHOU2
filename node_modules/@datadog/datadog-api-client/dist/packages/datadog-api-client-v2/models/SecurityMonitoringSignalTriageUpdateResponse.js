"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalTriageUpdateResponse = void 0;
/**
 * The response returned after all triage operations, containing the updated signal triage data.
 */
class SecurityMonitoringSignalTriageUpdateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalTriageUpdateResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalTriageUpdateResponse = SecurityMonitoringSignalTriageUpdateResponse;
/**
 * @ignore
 */
SecurityMonitoringSignalTriageUpdateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSignalTriageUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalTriageUpdateResponse.js.map