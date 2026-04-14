"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalAssigneeUpdateAttributes = void 0;
/**
 * Attributes describing the new assignee of a security signal.
 */
class SecurityMonitoringSignalAssigneeUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalAssigneeUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalAssigneeUpdateAttributes = SecurityMonitoringSignalAssigneeUpdateAttributes;
/**
 * @ignore
 */
SecurityMonitoringSignalAssigneeUpdateAttributes.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "SecurityMonitoringTriageUser",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalAssigneeUpdateAttributes.js.map