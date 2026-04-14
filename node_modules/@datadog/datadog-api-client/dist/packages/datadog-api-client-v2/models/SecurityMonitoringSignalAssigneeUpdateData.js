"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalAssigneeUpdateData = void 0;
/**
 * Data containing the patch for changing the assignee of a signal.
 */
class SecurityMonitoringSignalAssigneeUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalAssigneeUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalAssigneeUpdateData = SecurityMonitoringSignalAssigneeUpdateData;
/**
 * @ignore
 */
SecurityMonitoringSignalAssigneeUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSignalAssigneeUpdateAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalAssigneeUpdateData.js.map