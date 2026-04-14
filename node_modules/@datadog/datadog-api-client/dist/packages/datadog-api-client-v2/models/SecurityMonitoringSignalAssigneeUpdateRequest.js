"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalAssigneeUpdateRequest = void 0;
/**
 * Request body for changing the assignee of a given security monitoring signal.
 */
class SecurityMonitoringSignalAssigneeUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalAssigneeUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalAssigneeUpdateRequest = SecurityMonitoringSignalAssigneeUpdateRequest;
/**
 * @ignore
 */
SecurityMonitoringSignalAssigneeUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSignalAssigneeUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalAssigneeUpdateRequest.js.map